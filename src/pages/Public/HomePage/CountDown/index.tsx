"use client";

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import ScrollPaper from "../../../../../public/ScrollPaper.svg"
import frame from "../../../../../public/frame.svg"
import ButtonHeight from "../../../../../public/ButtonHeight.svg"
import { IGetSystemConfigWithAmountUserResponse } from '@models/system/response'
import { getSocket } from '@configs/socket'

interface CountDownProps {
    activeWithAmountUser: IGetSystemConfigWithAmountUserResponse
    accessToken: string
}

const CountDown = ({ activeWithAmountUser, accessToken }: CountDownProps) => {
    const { systemConfig, amountUser: initialAmountUser } = activeWithAmountUser;
    const launchDate = systemConfig?.launchDate;

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const launchDateString = launchDate
        ? new Date(launchDate).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })
        : '';


    /**
     * Count Down
     */
    useEffect(() => {
        if (!launchDate) return;

        const calculateTimeLeft = () => {
            const difference = +new Date(launchDate) - +new Date();
            let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }

            return timeLeft;
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [launchDate]);
    //--------------------------------End--------------------------------//

    const formatTime = (time: number) => time.toString().padStart(2, '0');

    /**
     * Socket
     */
    const [userCount, setUserCount] = useState(initialAmountUser);

    useEffect(() => {
        const socket = getSocket(accessToken);

        socket.on('connect', () => {
            console.log('Socket connected:', socket.id);
            socket.emit('joinSystemConfigRoom', { room: 'system-config-room' });
        });

        socket.on('userCountUpdate', (data: { userCount: number }) => {
            console.log('Received userCountUpdate:', data);
            setUserCount(data.userCount);
        });

        socket.on('disconnect', (reason) => {
            console.log('Socket disconnected:', reason);
        });

        return () => {
            console.log('Cleaning up socket connection...');
            socket.off('connect');
            socket.off('disconnect');
            socket.off('userCountUpdate');
            socket.disconnect();
        };
    }, [accessToken]);

    return (
        <div className='w-full flex items-center justify-center'>
            <div className='relative w-full max-w-5xl mx-auto'>
                <Image src={ScrollPaper} alt="Scroll Paper" className="w-full h-auto max-w-[1000px]" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[80%] flex items-center justify-center flex-col">
                    <div className='flex items-center justify-center flex-col mt-2'>
                        <h1 className='text-center text-5xl md:text-6xl font-bd-street-sign text-secondary md:mb-2 mb-1'>
                            ĐẠI VIỆT KỲ NHÂN
                        </h1>
                        <h2 className='text-center md:text-4xl text-3xl font-bd-street-sign text-third md:mb-2'>
                            Trang web chính thức ra mắt
                        </h2>
                        <h2 className='text-center md:text-4xl text-2xl font-bd-street-sign text-third md:mb-2'>
                            {launchDateString}
                        </h2>
                    </div>

                    <div className='relative w-full flex justify-center'>
                        <Image src={frame} alt="Frame" className="w-full h-auto max-w-[550px] md:max-w-[800px]" />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] md:w-[90%] flex items-center justify-start flex-col'>
                            {/* --- Title Count Down --- */}
                            <div className='w-full flex items-center justify-center gap-2'>
                                <h3 className='text-center md:text-2xl text-lg md:mb-1 font-semibold font-dfvn-graphit text-secondary'>
                                    Thời gian còn lại
                                </h3>
                            </div>

                            {/* --- Count Down --- */}
                            <div className='flex items-center justify-center '>
                                {/* --- Day --- */}
                                <div className='relative flex items-center justify-center '>
                                    <Image src={ButtonHeight} alt="button" className="h-full max-w-[100px] md:max-w-[138px]" />
                                    <div className='absolute w-full h-full flex items-center justify-start flex-col'>
                                        <span className='text-center font-dfvn-graphit md:mt-1.5 h-full md:text-2xl text-lg font-bold text-secondary'>
                                            {formatTime(timeLeft.days)}
                                        </span>
                                        <span className='text-center font-dfvn-graphit h-full text-md text-third'>
                                            Ngày
                                        </span>
                                    </div>
                                </div>

                                {/* --- Hour --- */}
                                <div className='relative flex items-center justify-center'>
                                    <Image src={ButtonHeight} alt="button" className="h-auto max-w-[100px] md:max-w-[138px]" />
                                    <div className='absolute w-full h-full flex items-center justify-start flex-col'>
                                        <span className='text-center font-dfvn-graphit md:mt-1.5 h-full md:text-2xl text-xl font-bold text-secondary'>
                                            {formatTime(timeLeft.hours)}
                                        </span>
                                        <span className='text-center font-dfvn-graphit h-full text-md text-third'>
                                            Giờ
                                        </span>
                                    </div>
                                </div>

                                {/* --- Minute --- */}
                                <div className='relative flex items-center justify-center'>
                                    <Image src={ButtonHeight} alt="button" className="h-auto max-w-[100px] md:max-w-[138px]" />
                                    <div className='absolute w-full h-full flex items-center justify-start flex-col'>
                                        <span className='text-center font-dfvn-graphit md:mt-1.5 h-full md:text-2xl text-xl font-bold text-secondary'>
                                            {formatTime(timeLeft.minutes)}
                                        </span>
                                        <span className='text-center font-dfvn-graphit h-full text-md text-third'>
                                            Phút
                                        </span>
                                    </div>
                                </div>

                                {/* --- Second --- */}
                                <div className='relative flex items-center justify-center'>
                                    <Image src={ButtonHeight} alt="button" className="h-auto max-w-[100px] md:max-w-[138px]" />
                                    <div className='absolute w-full h-full flex items-center justify-start flex-col'>
                                        <span className='text-center font-dfvn-graphit md:mt-1.5 h-full md:text-2xl text-xl font-bold text-secondary'>
                                            {formatTime(timeLeft.seconds)}
                                        </span>
                                        <span className='text-center font-dfvn-graphit h-full text-md text-third'>
                                            Giây
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full flex items-center justify-center gap-2 md:mt-5 mt-2'>
                                <div className='flex flex-col items-end justify-center'>
                                    <p className='text-end md:text-xl text-md font-semibold font-dfvn-graphit text-secondary'>
                                        Số người đăng ký trước:
                                    </p>
                                    <p className='text-end md:text-xl text-md font-semibold font-dfvn-graphit text-secondary'>
                                        Số xu người đăng ký trước nhận được:
                                    </p>
                                </div>
                                <div className='relative flex items-center justify-center gap-2'>
                                    <Image src={ButtonHeight} alt="button" className="h-full max-w-[80px] md:max-w-[110px]" />
                                    <div className='absolute flex items-center justify-start flex-col'>
                                        <p className='flex items-center justify-center text-center text-secondary font-dfvn-graphit h-fit md:text-2xl text-xl mt-1'>
                                            {userCount}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountDown;