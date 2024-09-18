<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class PassportAuthUser extends Controller
{
    public function registerClient(Request $req)
    {
        $validator = Validator::make($req->all(), [
            "image" => "required|image",
            "name" => "required",
            "cin" => "required",
            "phone" => "required|unique:users,phone",
            "email" => "email | required|unique:users,email",
            "password" => "required"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "errors" => $validator->errors()
            ]);
        } else {
            $path = $req->image->store("profile/image", "public");
            $user = new User();
            $user->image = $path;
            $user->name = $req->name;
            $user->cin = $req->cin;
            $user->phone = $req->phone;
            $user->email = $req->email;
            $user->password = Hash::make($req->password);
            $user->save();
            return response()->json([
                "type" => "client",
                "message" => "Your Account has been created successfully "

            ]);
        }
    }

    public function registerAdmin(Request $req)
    {
        $validator = Validator::make($req->all(), [
            "image" => "required|image",
            "name" => "required",
            "cin" => "required",
            "phone" => "required|max:10|unique:users,phone",
            "email" => "email | required|unique:users,email",
            "password" => "required"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "errors" => $validator->errors()
            ]);
        } else {
            $path = $req->image->store("profile/image", "public");
            $user = new User();
            $user->image = $path;
            $user->name = $req->name;
            $user->cin = $req->cin;
            $user->phone = $req->phone;
            $user->email = $req->email;
            $user->type = "admin";
            $user->password = Hash::make($req->password);
            $user->save();
            return response()->json([
                "type" => "Admin",
                "message" => "Admin has been created successfully "
            ]);
        }
    }


    public function login(Request $req)
    {
        $this->validate($req, [
            "email" => "email|required",
            "password" => "required"
        ]);
        
        $user = User::where('email', $req->email)->first();
        
        switch ($user->type) {
            case "admin":
                if (Hash::check($req->password, $user->password)) {
                    $token = $user->createToken('eji$#%@c@dw5#')->accessToken;
                    $cookie = cookie("jwt", $token, 68 * 24);
                    return response([
                        "type" => "admin",
                        "status" => 200,
                        "message" => "Welcome " . $user->name . "! Have a good day <3"
                    ])->withCookie($cookie);
                } else {
                    return response([
                        "message" => "Incorrect password"
                    ]);
                }
                break;
        
            case "client":
                if (Hash::check($req->password, $user->password)) {
                    $token = $user->createToken('eji$#%@c@dw5#')->accessToken;
                    $cookie = cookie("jwt", $token, 68 * 24);
                    return response([
                        "type" => "client",
                        "status" => 200,
                        "message" => "Welcome " . $user->name . "! Have a good day <3"
                    ])->withCookie($cookie);
                } else {
                    return response([
                        "status" => 401,
                        "message" => "Incorrect password"
                    ]);
                }
                break;
        
            default:
                return response([
                    "status" => 404,
                    "message" => "User not found"
                ]);
        }
        
    }

    public function userinfo()
    {
        $user = auth()->user();
        return response()->json([
            "user" => $user
        ]);
    }
    public function update(Request $request, $id)
    {
        $user = User::find($id);
    
        if (!$user) {
            return response()->json([
                "message" => "User not found."
            ], 404);
        }
    
        $authUser = auth()->user();
        if ($authUser->type != "admin" && $authUser->id != $id) {
            return response()->json([
                "message" => "Unauthorized."
            ], 401);
        } else {
            $validator = Validator::make($request->all(), [
                "image" => "nullable|mimes:jpeg,png,jpg,gif,webp|max:2048",
                "name" => "required",
                "cin" => "required",
                "phone" => "required|max:10|unique:users,phone," . $id,
                "email" => "email|required|unique:users,email," . $id,
            ]);
    
            if ($validator->fails()) {
                return response()->json([
                    "errors" => $validator->errors()
                ], 400);
            } else {
                if ($request->hasFile("image")) {
                    if ($user->image) {
                        $exists = Storage::disk('public')->exists("profile/image/{$user->image}");
                        if ($exists) {
                            Storage::disk('public')->delete("profile/image/{$user->image}");
                        }
                    }
    
                    $path = $request->file('image')->store('profile/image', 'public');
                    $user->image = $path;
                }
    
                $user->name = $request->name;
                $user->cin = $request->cin;
                $user->phone = $request->phone;
                $user->email = $request->email;
    
                $user->save();
    
                return response()->json([
                    "message" => "User updated successfully."
                ]);
            }
        }
    }
    


    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                "message" => "User not found."
            ], 404);
        }
        $authUser = auth()->user();
        if ($authUser->type != "admin" && $authUser->id != $id) {
            return response()->json([
                "message" => "Unauthorized."
            ], 401);
        }

        $user->delete();

        return response()->json([
            "message" => "User deleted successfully."
        ]);
    }
    public function allusers()
    {
        $users = User::select("id", "image" , "name", "cin", "phone", "type", "email")->where("type", "client")->get();
        return response()->json([
            "users" => $users
        ]);
    }
    public function edituser($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json([
                "message" => "User not found."
            ], 404);
        }
        return response()->json([
            "user" => $user
        ]);
    }
    public function userAdmin () {
        $user = User::get()->where("type","admin");
        return response()->json([
            "admin" => $user
        ]);
    }

    public function logout() {
        $cookie = Cookie::forget("jwt");
        return response()->json([
            "message" => "Logged out successfully."
            ], 200)->withCookie($cookie);
    }
}
