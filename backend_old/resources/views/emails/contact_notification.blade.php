<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Yeni İletişim Formu Mesajı</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #f3f4f6; padding: 24px;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden;">
    <tr>
        <td style="background: linear-gradient(135deg, #ef4444, #b91c1c); padding: 20px 24px; color: #ffffff;">
            <h1 style="margin: 0; font-size: 20px;">HegoWeb - Yeni İletişim Mesajı</h1>
        </td>
    </tr>
    <tr>
        <td style="padding: 24px;">
            <p style="margin: 0 0 16px 0; font-size: 14px; color: #374151;">
                Web siteniz üzerinden yeni bir iletişim formu mesajı aldınız.
            </p>

            <table cellpadding="0" cellspacing="0" style="width: 100%; font-size: 14px; color: #111827; margin-bottom: 16px;">
                <tr>
                    <td style="padding: 8px 0; width: 120px; font-weight: 600; color: #6b7280;">Ad Soyad</td>
                    <td style="padding: 8px 0;">{{ $name }}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; width: 120px; font-weight: 600; color: #6b7280;">E-posta</td>
                    <td style="padding: 8px 0;">{{ $email }}</td>
                </tr>
            </table>

            <div style="margin-top: 8px;">
                <p style="margin: 0 0 8px 0; font-weight: 600; font-size: 14px; color: #6b7280;">Mesaj</p>
                <div style="padding: 12px 14px; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; font-size: 14px; color: #111827; white-space: pre-line;">
                    {{ $message }}
                </div>
            </div>
        </td>
    </tr>
    <tr>
        <td style="padding: 16px 24px; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb;">
            Bu e-posta HegoWeb iletişim formu üzerinden otomatik olarak gönderilmiştir.
        </td>
    </tr>
</table>
</body>
</html>

