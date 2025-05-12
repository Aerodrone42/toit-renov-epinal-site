
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';

interface ContactFormProps {
  compact?: boolean;
}

interface FormValues {
  name: string;
  phone: string;
  email?: string;
  subject?: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ compact = false }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simuler un envoi (à remplacer par l'envoi réel)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form data:', data);
    
    // Afficher le toast de confirmation
    toast({
      title: "Message envoyé !",
      description: "Nous vous contacterons très prochainement.",
    });
    
    // Réinitialiser le formulaire
    reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          id="name"
          placeholder="Votre nom et prénom *"
          {...register("name", { required: "Ce champ est obligatoire" })}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <Input
          id="phone"
          placeholder="Votre téléphone *"
          {...register("phone", { 
            required: "Ce champ est obligatoire",
            pattern: {
              value: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
              message: "Numéro de téléphone invalide"
            }
          })}
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      {!compact && (
        <div>
          <Input
            id="email"
            type="email"
            placeholder="Votre email"
            {...register("email", { 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Adresse email invalide"
              }
            })}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      )}

      {!compact && (
        <div>
          <Input
            id="subject"
            placeholder="Sujet"
            {...register("subject")}
          />
        </div>
      )}

      <div>
        <Textarea
          id="message"
          placeholder="Votre message *"
          rows={compact ? 3 : 5}
          {...register("message", { required: "Ce champ est obligatoire" })}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
      </Button>
      
      <p className="text-xs text-gray-500 mt-2">
        * Les champs marqués d'un astérisque sont obligatoires
      </p>
    </form>
  );
};

export default ContactForm;
