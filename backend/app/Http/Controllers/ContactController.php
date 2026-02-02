<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $contact = Contact::create([
                'name' => $request->name,
                'email' => $request->email,
                'message' => $request->message,
                'ip_address' => $request->ip(),
            ]);

            // Log email sending simulation
            Log::info("New contact message from: {$contact->email}");

            return response()->json([
                'success' => true,
                'message' => 'Mesajınız başarıyla alındı.',
                'data' => $contact
            ], 201);
        } catch (\Exception $e) {
            Log::error('Contact Error: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
            ], 500);
        }
    }
}
