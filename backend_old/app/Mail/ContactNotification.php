<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactNotification extends Mailable
{
    use Queueable, SerializesModels;

    public Contact $contact;

    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    public function build(): self
    {
        return $this->subject('Yeni İletişim Formu Mesajı')
            ->view('emails.contact_notification')
            ->with([
                'name'    => $this->contact->name,
                'email'   => $this->contact->email,
                'message' => $this->contact->message,
            ]);
    }
}

