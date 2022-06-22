import { useRouter } from 'next/dist/client/router';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { usePost } from '../../hook/usePost';
import { schema } from './schema';
import styles from './styles.module.css';

export const ContactF = ({ info, lang }) => {
  const router = useRouter();
  const [post] = usePost();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    post('https://www.roykachani.com/api/contact', data);
    router.push('/');
  };

  if (lang === false)
    return (
      <div className={styles.form_container}>
        <form
          className={styles.contact_form}
          onSubmit={handleSubmit(handleForm)}
        >
          <div className={styles.form_input}>
            <span>{info.name}</span>
            <input
              placeholder={info.name}
              name="name"
              {...register('name')}
              type="text"
            />
          </div>
          <div className={styles.form_input}>
            <span>{info.email}</span>
            <input
              placeholder={info.email}
              name="email"
              {...register('email')}
              type="email"
            />
          </div>
          <div className={styles.form_input}>
            <span>{info.description}</span>
            <textarea
              placeholder={info.text_description}
              name="description"
              {...register('description')}
            />
          </div>
          <button className={styles.form_btn} type="submit">
            {info.btn}
          </button>
        </form>
      </div>
    );

  return (
    <div className={styles.form_container}>
      <form className={styles.contact_form} onSubmit={handleSubmit(handleForm)}>
        <div className={styles.form_input}>
          <span>Name</span>
          <input
            placeholder="Name"
            name="name"
            {...register('name')}
            type="text"
          />
        </div>
        <div className={styles.form_input}>
          <span>Email</span>
          <input
            placeholder="email"
            name="email"
            {...register('email')}
            type="email"
          />
        </div>
        <div className={styles.form_input}>
          <span>Description</span>
          <textarea
            placeholder="Describe at least 10 characters."
            name="description"
            {...register('description')}
          />
        </div>
        <button className={styles.form_btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
