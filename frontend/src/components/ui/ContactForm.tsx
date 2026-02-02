import React, { useState } from 'react';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { contactService } from '../../services/contactService';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export const ContactForm: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        try {
            await contactService.sendMessage(data);
            toast.success('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
            reset();
        } catch (error) {
            console.error(error);
            toast.error('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Ad Soyad</label>
                    <input
                        {...register('name', { required: 'Ad Soyad zorunludur' })}
                        type="text"
                        className={`w-full px-6 py-4 rounded-2xl border-2 ${errors.name ? 'border-red-500' : 'border-slate-100'} focus:border-red-600 outline-none transition-all font-medium`}
                        placeholder="Adınız"
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-900 uppercase tracking-widest">E-posta</label>
                    <input
                        {...register('email', {
                            required: 'E-posta zorunludur',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Geçersiz e-posta adresi"
                            }
                        })}
                        type="email"
                        className={`w-full px-6 py-4 rounded-2xl border-2 ${errors.email ? 'border-red-500' : 'border-slate-100'} focus:border-red-600 outline-none transition-all font-medium`}
                        placeholder="ornek@mail.com"
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Mesajınız</label>
                <textarea
                    {...register('message', { required: 'Mesaj zorunludur' })}
                    rows={4}
                    className={`w-full px-6 py-4 rounded-2xl border-2 ${errors.message ? 'border-red-500' : 'border-slate-100'} focus:border-red-600 outline-none transition-all font-medium resize-none`}
                    placeholder="Proje detaylarınızdan bahsedin..."
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 rounded-2xl font-black text-xl transition-all shadow-2xl flex items-center justify-center gap-3 transform active:scale-95 ${isSubmitting
                        ? 'bg-slate-300 text-slate-600 cursor-not-allowed shadow-slate-200'
                        : 'bg-red-600 text-white hover:bg-red-700 shadow-red-200'
                    }`}
            >
                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'} <Send size={24} />
            </button>
        </form>
    );
};
