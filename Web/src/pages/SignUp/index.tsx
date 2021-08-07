import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationError from '../../utils/getValidationErros';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background} from './styles';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
            name: Yup.string().trim().required('Nome obrigatório.'),
            email: Yup.string().trim().required('Email obrigatório.').email('Digite um email válido.'),
            password: Yup.string().min(6, 'No mínimo 6 dígitos.')
        });

        try {            
            await schema.validate(data, {
                abortEarly: false,
            })

        } catch (err) {
            const error: Yup.ValidationError = JSON.parse(JSON.stringify(err));            

            const errors = getValidationError(err);

            formRef.current?.setErrors(errors);
        }
    }, []);


    return (
        <Container>
            <Background/>
    
            <Content>
                <img src={logoImg} alt="GoBarber"/>
    
                <Form ref={formRef} onSubmit={handleSubmit} >
                    <h1>Faça seu Cadatro</h1>
    
                    <Input autoComplete="off" name="name" icon={FiUser} placeholder="Nome"/>
                    <Input autoComplete="off" name="email" icon={FiMail} placeholder="E-mail"/>
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
    
                    <Button type="submit">Entrar</Button>                
                </Form>
    
                <a href="login">
                  <FiArrowLeft /> 
                  Voltar para logon
                </a>
            </Content>
    
    
        </Container>        
    );
}


export default SignUp;