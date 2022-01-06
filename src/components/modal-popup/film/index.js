import React, { useRef, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Avatar } from "@mui/material";

import {
    Background,
    WrapperModal,
    Content,
    ElementEdit,
    NameEdit,
    Input,
    Divide,
    EditGroup,
    ButtonGroup,
    ButtonGroup2,
    NamePage,
} from "./modal";

const schema = yup.object().shape({
    username: yup.string().required("Tài khoản không được để trống"),
    password: yup.string().required("Mật khẩu không được để trống"),
});

function ModalLogin(props) {
    const { handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });


    const { open, setOpenEdit, id } = props;

    const modalRef = useRef();
    const animatedd = useSpring({
        config: {
            duration: 250,
        },
        opacity: open ? 1 : 0,
        transform: open ? `translateY(0%)` : `translateX(-100%)`,
    });
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setOpenEdit(false);
        }
    };

    const onSubmit = (data) => {
        console.log(data)
    };


    const closeModalEdit = () => {
        setOpenEdit(false)
    }
    const [detail, setDetail] = useState({})


    useEffect(() => {

        axios.get('https://chom-phim.herokuapp.com/film/' + id)
            .then(res => {
                console.log(res.data)
                setDetail(res.data)
            })
    }, [id]);
    // const [budget, setBudget] = useState(detail.budget);
    const [data, setData] = useState(detail);

    function handleChange(evt) {
        const value = evt.target.value;
        setData({
            ...data,
            [evt.target.name]: value
        });
    }
    console.log(data)
    return (
        <>
            {open && detail ? (
                <Background ref={modalRef} onClick={closeModal} open={open}>
                    <animated.div style={animatedd}>
                        <WrapperModal>
                            <Content>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <NamePage>Edit Film</NamePage>
                                    <EditGroup>
                                        <Divide>
                                            <ElementEdit>
                                                <NameEdit>ID</NameEdit>
                                                <Input name="id" value={data.id} disabled></Input>
                                            </ElementEdit>
                                            <ElementEdit>
                                                <NameEdit>Budget</NameEdit>
                                                <Input name="budget" type="number" value={data.budget} onChange={(e) => handleChange(e)}></Input>
                                            </ElementEdit>
                                            <ElementEdit>
                                                <NameEdit>Title</NameEdit>
                                                <Input name="title" value={data.title} onChange={(e) => handleChange(e)}></Input>
                                            </ElementEdit>

                                            <ElementEdit>
                                                <NameEdit>Release Date</NameEdit>
                                                <Input type="date" name="release_date" value={data.release_date} onChange={(e) => handleChange(e)} ></Input>
                                            </ElementEdit>
                                            <ElementEdit>
                                                <NameEdit>Video ID</NameEdit>
                                                <Input name="video_id" value={data.video_id} onChange={(e) => handleChange(e)} ></Input>
                                            </ElementEdit>
                                            <ElementEdit>
                                                <NameEdit >Vote Count</NameEdit>
                                                <Input name="vote_count" value={data.vote_count} onChange={(e) => handleChange(e)}></Input>
                                            </ElementEdit>
                                        </Divide>
                                        <Divide>
                                            <ElementEdit style={{ display: 'block' }}>
                                                <NameEdit >Poster</NameEdit>
                                                <Avatar src={data.poster_path} sx={{ width: 250, height: 270 }} variant="square" ></Avatar>
                                            </ElementEdit>
                                        </Divide>
                                    </EditGroup>
                                    <ButtonGroup>

                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <NameEdit>OverView</NameEdit>

                                        <textarea rows="6" name="overview" value={data.overview} onChange={(e) => handleChange(e)} ></textarea>
                                        <ButtonGroup2>
                                            <button type="submit" onClick={closeModalEdit}>EDIT</button>
                                            <button type="submit" onClick={closeModalEdit}>CANCEL</button>
                                        </ButtonGroup2>
                                    </ButtonGroup>
                                </form>
                            </Content>
                        </WrapperModal>
                    </animated.div>
                </Background>
            ) : null
            }
        </>
    );
}
export default ModalLogin;
