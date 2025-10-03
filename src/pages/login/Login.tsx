import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { useLoginMutauion } from '@/services/auth';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/ui';
import { cn } from '@/utils/clsx';

import { FormSchema } from './LoginValidation';

const Login = () => {
  // locale states
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [passwordType, setPasswordType] = useState<'password' | 'text'>(
    'password'
  );

  // api
  const mutation = useLoginMutauion();

  // event handlers
  function onSubmit(data: z.infer<typeof FormSchema>) {
    mutation.mutate(data);
  }

  // effect handlers
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background', '#f5f5f5');

    return () => {
      root.style.setProperty('--background', '#ffffff');
    };
  }, []);

  return (
    <div className="flex h-screen w-scree flex-col items-center justify-center max-[500px]:px-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6 bg-white p-5 rounded-[12px] max-w-[500px] max-[500px]:max-w-full max-[500px]:w-full"
        >
          <h1 className="font-bold text-2xl text-neutral-700 text-center">
            Вход
          </h1>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-600">Почта</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-600">Пароль</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input type={passwordType} {...field} />
                    <button
                      type="button"
                      onClick={() =>
                        setPasswordType(
                          passwordType === 'password' ? 'text' : 'password'
                        )
                      }
                      className="border-0 outline-0 bg-none cursor-pointer absolute top-1/2 right-[10px] -translate-y-1/2"
                    >
                      {passwordType === 'password' ? <Eye /> : <EyeOff />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-center items-center">
            <Button
              disabled={mutation.isPending}
              className={cn('w-full max-w-full')}
              type="submit"
            >
              {mutation.isPending ? 'Выполняется...' : 'Вход'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
