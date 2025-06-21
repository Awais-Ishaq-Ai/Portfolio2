import React, { useEffect, useState } from 'react';
import Ali from '../../assets/Images/ali.png'
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Home() {
    const fullText = 'Hi I am Ali Raza\nUI/UX Designer';
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [speed, setSpeed] = useState(100);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % fullText.length;
            const updatedText = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000); // wait 2s before delete
                setSpeed(50);
                return;
            }

            if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setSpeed(100);
                return;
            }
        };

        const timer = setTimeout(handleTyping, speed);

        return () => clearTimeout(timer);
    }, [text, isDeleting]);

    // Highlight Ali Raza and handle newline
    const formatText = () => {
        const formatted = text
            .replace('Ali Raza', `<span style="color:#FF6A00;">Ali Raza</span>`)
            .replace(/\n/g, '<br />');

        return { __html: formatted };
    };

    return (
        <div className='flex justify-between items-center pt-25 lg:px-10 h-[80vh]'>
            <div className='text-center'>
                <h1 className='h-[110px] w-[400px] text- md:text-4xl font-extrabold whitespace-pre-line'>
                    <span className='text-md' dangerouslySetInnerHTML={formatText()} />
                    <span className='animate-pulse'>|</span>
                </h1>
                <div className='h-[110px] w-[400px] text-justify ml-14'>
                    <p className='text-sm'>With 1+ years of experience, I craft clean, user-focused designs for web and mobile platform. With a focus on usability and aesthetics, I turn ideas into polished digital products.</p>
                    <button type="button" className='bg-[#FF6A00] text-white capitalize px-8 py-1 rounded mt-5'>hiri me</button>
                </div>
            </div>

            <div className=' mr-30 h-[100%] '>
                <div className='relative flex justify-center '>
                    <img src={Ali} className='h-[300px] z-50' alt="" />
                    {/* rounded bolob */}
                    <svg width="288" height="436" className='absolute z-10' viewBox="0 0 436 436" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M225.654 430.838L109.116 400.773C32.0221 380.879 -14.3515 302.302 5.54259 225.208L35.6079 108.671C55.502 31.5767 134.079 -14.797 211.173 5.09715L327.71 35.1624C404.804 55.0565 451.178 133.633 431.283 210.727L401.218 327.264C381.358 404.324 302.748 450.732 225.654 430.838Z" fill="#FF9654" />
                    </svg>
                    {/* blob on image from bottom */}

                    <svg width="250" className='absolute -bottom-20 z-50' height="185" viewBox="0 0 424 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224.718 212.348L108.181 182.283C31.0869 162.389 -15.2867 83.8122 4.60741 6.71817C51 -7.7627 140 6.71817 224.718 6.71817L424 6.71818L400.283 108.775C380.423 185.834 301.812 232.242 224.718 212.348Z" fill="#FF9654" />
                    </svg>

                    <div className='absolute -left-10 top-[30%] z-0 bg-[#FFB78A] h-[70px] w-[70px] rounded-full'></div>
                    <div className='absolute -left-20 top-[80%] z-0 bg-[#FFB78A] h-[120px] w-[120px] rounded-full'></div>
                    <div className='absolute -right-20 top-[80%] z-0 bg-[#FFEFE6] h-[120px] w-[120px] rounded-full'></div>
                    <div className="absolute -bottom-23 flex space-x-4 text-black">
                        <FaLinkedin
                            size={24}
                            className="hover:text-blue-600 transition duration-300 cursor-pointer"
                        />
                        <FaInstagram
                            size={24}
                            className="hover:text-pink-500 transition duration-300 cursor-pointer"
                        />
                        <FaFacebook
                            size={24}
                            className="hover:text-blue-500 transition duration-300 cursor-pointer"
                        />
                        <FaTwitter
                            size={24}
                            className="hover:text-blue-400 transition duration-300 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}