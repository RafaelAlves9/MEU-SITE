import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const validationSchema = yup.object({
    email: yup
        .string('Insire seu Email')
        .email('Insire um email válido')
        .required('Este campo é obrigatório'),
    name: yup
        .string('Digite seu nome')
        .min(2, 'Este campo deve conter no mínimo 2 caracteres')
        .max(50, 'Este campo deve conter no máximo 50 caracteres')
        .required('Este campo é obrigatório'),
    messenge: yup
        .string('Digite uma mensagem')
        .min(2, 'Este campo deve conter no mínimo 2 caracteres')
        .max(500, 'Este campo deve conter no máximo 500 caracteres')
        .required('Este campo é obrigatório'),
});

export const Formulario = () => {
    const formik = useFormik({
        initialValues: {
          email: '',
          name: '',
          messenge: '',
        },
        validationSchema: validationSchema,
      });
    
    return (
        <>
            <form action="https://formsubmit.co/2264e4b3e2866291571f83186693a4c7" method="POST" onFocusCapture={formik.handleSubmit}>
                <input type="hidden" name="_captcha" value='false'/>
                <input type="hidden" name="_next" value="http://localhost:3000/contato"/>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Nome"
                    type="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    sx={{ my:'7px' }}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{ my:'7px' }}
                />
                <TextField
                    fullWidth
                    id="messenge"
                    name="messenge"
                    label="Mensagem" 
                    type='text'
                    multiline
                    rows={2}
                    maxRows={4}
                    value={formik.values.messenge}
                    onChange={formik.handleChange}
                    error={formik.touched.messenge && Boolean(formik.errors.messenge)}
                    helperText={formik.touched.messenge && formik.errors.messenge}
                    sx={{ my:'7px' }}
                />
                <Button color="primary" variant="contained" type="submit" sx={{ mt:'15px' }}>
                    Enviar
                </Button>
            </form>
        </>
    );
};