import React, { Fragment } from "react";
import { Column, Section, Title, Container, Card, Button} from 'rbx';
import "../../../styles/users.scss";
import UsersEditForm from "../../../components/users/user_edit_form";
import HeaderLoggedEditUser from "../../../components/header_logged_edit_user";
import UsersEditFormPassword from "../../../components/users/user_edit_password_form";
import UsersDelete from "../../../components/users/user_delete";

const UsersEditScreen = ()=>(
    <Fragment>
        <HeaderLoggedEditUser/>
        <Section size="medium" className="users">
            <Container>
                <Column.Group centered className="users-edit">
                    <Column size={12}>
                        <Title size={5} className="has-text-custom-yellow has-text-left">
                            Informações
                        </Title>
                        <Card>
                            <Card.Content>
                                <UsersEditForm/>
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>

                <Column.Group centered className="users-edit">
                    <Column size={12}>
                        <Title size={5} className="has-text-custom-yellow has-text-left">
                            Senha
                        </Title>
                        <Card>
                            <Card.Content>
                                <UsersEditFormPassword/>
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>

                <Column.Group centered className="users-edit">
                    <Column size={12} className="has-text-right">
                       <UsersDelete/>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
)

export default UsersEditScreen;