import React, { useContext, useState, } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Formulario = ({ type }) => {
    console.log("Formulario type:", type);
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        player: true,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRoleChange = (e) => {
        setFormData({
            ...formData,
            player: e.target.value === "player"
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

       
        if (!formData.email || !formData.password) {
            console.log("Por favor, completa los campos obligatorios.");
            return;
        }

        console.log("Submit data:", formData, "type:", type);
        
        if (type === "login") {
            const aux = await actions.login(formData)
            return navigate(aux)

        } 
        return actions.register(formData);

    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="m-3" >
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="m-3">
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            {type !== 'login' && (
                <>
                    <div className="m-3">
                        <label htmlFor="role">Escoge tu Rol</label>
                        <div>
                                <input
                                    type="radio"
                                    id="player"
                                    name="role"
                                    value="player"
                                    checked={formData.player === true}
                                    onChange={handleRoleChange}
                                />
                                <label htmlFor="player" className="ms-2">Player</label>
                        </div>
                        <div>
                                <input
                                    type="radio"
                                    id="host"
                                    name="role"
                                    value="host"
                                    checked={formData.player === false}
                                    onChange={handleRoleChange}
                                />
                                <label htmlFor="host" className="ms-2">Host</label>
                        </div>
                    </div>
                   
                </>
            )}
            <div>
                <input
                    type="submit"
                    value={type == 'login' ? 'Iniciar sesión' : 'Registrarse'}
                />
            </div>
        </form>
    );
};
