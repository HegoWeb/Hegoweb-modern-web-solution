<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Mail\ContactNotification;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    /**
     * İletişim formu isteğini kaydeder ve e-posta gönderir.
     */
    public function store(ContactRequest $request): JsonResponse
    {
        $data = $request->validated();

        try {
            $contact = Contact::create([
                'name'       => $data['name'],
                'email'      => $data['email'],
                'message'    => $data['message'],
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
            ]);

            // E-postayı kuyruğa atmak isterseniz ->queue() kullanılabilir
            Mail::to(config('mail.from.address'))
                ->send(new ContactNotification($contact));

            return response()->json([
                'success' => true,
                'message' => 'Mesajınız başarıyla gönderildi.',
                'data'    => [
                    'id'         => $contact->id,
                    'created_at' => $contact->created_at,
                ],
            ]);
        } catch (\Throwable $e) {
            Log::error('Contact form error', [
                'error' => $e->getMessage(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
            ], 500);
        }
    }
}

