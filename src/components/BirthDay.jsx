import React, { useRef, useState, useEffect } from 'react'
import { Music, Gift, Camera, Heart, ChevronLeft, ChevronRight, Play, Pause, Star, List } from 'lucide-react';
import memory1 from '../assets/photos/memoryy.jpg';
import memory2 from '../assets/photos/memory2.jpg';
import memory3 from '../assets/photos/memory3.jpg';
import memory4 from '../assets/photos/memory4.jpg';
import aishuss from '../assets/photos/aishuss.jpg';

import song from '../assets/music/songs.mp3'
import song1 from '../assets/music/song1.mp3'
import song2 from '../assets/music/song2.mp3'
import deewani from '../assets/music/dewani.mp3'
import ekvillan from '../assets/music/ekvillan.mp3'
import foryou from '../assets/music/foryou.mp3'

function BirthDay() {
    const [activeSection, setActiveSection] = useState('greeting');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(0);
    const [showIntro, setShowIntro] = useState(true);
    const [introFinished, setIntroFinished] = useState(false);
    const confettiRef = useRef(null);
    const musicContainerRef = useRef(null);
    const [audioElement, setAudioElement] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Sample memories
    const memories = [
        { id: 1, url: memory1, caption: 'Our First Meet' },
        { id: 2, url: memory2, caption: 'Our meet after a fight' },
        { id: 3, url: memory4, caption: 'Our 2nd meetup' },
        { id: 4, url: memory3, caption: 'Te extraño mucho ' }
    ];

    // Sample songs
    const songs = [
        { id: 1, url: deewani, title: "Deewani 🤍", artist: "love", duration: "1:32" },
        { id: 2, url: song, title: "Mersal (Your fav) ❤️", artist: "Love", duration: "4:35" },
        { id: 3, url: song2, title: "nan unn 🫂 ", artist: "24", duration: "3:43" },
        { id: 4, url: ekvillan, title: "Ek villan ", artist: "love", duration: "5:00" },
        { id: 5, url: foryou, title: "Kalank 🥰 ", artist: "love", duration: "3:00" },
        { id: 6, url: song1, title: "Tabaah Ho Gaye", artist: "Kool", duration: "4:32" },

    ];
    const instagramReels = [
        { id: 1, title: "Moments", views: "2k", url: "http://www.instagram.com/reel/C_r844jyDWo/?igsh=MWY5cnJkaTR1cmVlaw==" },
        { id: 2, title: "Haton meh", views: "1 k", url: "https://www.instagram.com/reel/DFSepK3zC0D/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==" },
        { id: 3, title: "Meh thera ", views: "3 k", url: "https://www.instagram.com/reel/DE9DJP2tMqf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { id: 4, title: "", views: "7 K", url: "https://www.instagram.com/reel/DBESmzQy1rl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        // { id: 4, title: "We fight , fix and stay", views: "7 K", url: "https://www.instagram.com/reel/DCqrAM1SlGw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        // { id: 5, title: "Hug", views: "5 K", url: "https://www.instagram.com/reel/DFFG47FNVfS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { id: 5, title: "4 Ever", views: "5.7K", url: "https://www.instagram.com/reel/DGi6OQqqVZj/?igsh=MWo3aGcwYXhjdHhtNA==" },
        { id: 6, title: "......", views: "5.7K", url: "https://www.instagram.com/reel/DEXrmFqv87m/?igsh=OTl0c2oybWJjenRz" },
        { id: 7, title: "", views: "5.7K", url: "https://www.instagram.com/reel/DF2eSX5SBKH/?igsh=MTN3ODMxaHdvcmEybw==" },
        { id: 8, title: "😊", views: "5.7K", url: "https://www.instagram.com/reel/DDUhbZPvUV5/?igsh=MTg1Z3F6ZXQ0YWt0eA==" },
        { id: 9, title: "😅", views: "5.7K", url: "https://www.instagram.com/reel/DErv4nLSFE2/?igsh=MXR2OXpkdHUweHJicQ==" },
        { id: 10, title: "🦋", views: "5.7K", url: "https://www.instagram.com/reel/DBOa2cIy6LQ/?igsh=MTY5bXh6anExM21lMg==" },
    ];
    const openInstagramReel = (url) => {
        window.open(url, '_blank');
    };

    const audioRef = useRef(new Audio(songs[0].url));
    useEffect(() => {
        if (introFinished) {
            // Start confetti when intro is finished
            const interval = setInterval(() => {
                createConfetti();
            }, 300);

            return () => clearInterval(interval);
        }
    }, [introFinished]);

    // useEffect(() => {
    //   if (activeSection === 'music' && musicContainerRef.current) {
    //     musicContainerRef.current.classList.add('music-animate-in');
    //   }
    // }, [activeSection]);

    const handleIntroClick = () => {
        setShowIntro(false);
        setTimeout(() => {
            setIntroFinished(true);
        }, 1500);
    };

    const createConfetti = () => {
        if (!confettiRef.current) return;

        const confetti = document.createElement('div');
        const colors = ['#FFD700', '#FF1493', '#00BFFF', '#7CFC00', '#FF4500', '#9370DB'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 10 + 10;
        const shape = Math.random() > 0.5 ? '50%' : '0';

        confetti.className = 'absolute';
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = color;
        confetti.style.borderRadius = shape;
        confetti.style.top = '-20px';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animation = `fall ${Math.random() * 3 + 3}s linear forwards`;

        confettiRef.current.appendChild(confetti);

        setTimeout(() => {
            if (confetti.parentNode === confettiRef.current) {
                confettiRef.current.removeChild(confetti);
            }
        }, 6000);
    };


    // const createConfetti = () => {
    //     if (!confettiRef.current) return;

    //     // Create a container for the icon
    //     const confetti = document.createElement('div');

    //     // Array of colors for the icons
    //     const colors = ['#FFD700', '#FF1493', '#00BFFF', '#7CFC00', '#FF4500', '#9370DB', '#FF6B6B', '#4ECDC4'];
    //     const color = colors[Math.floor(Math.random() * colors.length)];

    //     // Random size for the icon (hearts slightly larger)
    //     const size = Math.random() * 15 + 15;

    //     // Position and style the container
    //     confetti.className = 'absolute';
    //     confetti.style.top = '-20px';
    //     confetti.style.left = `${Math.random() * 100}%`;
    //     confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    //     confetti.style.animation = `fall ${Math.random() * 3 + 3}s linear forwards`;
    //     confetti.style.zIndex = '10';
    //     confetti.style.opacity = '0.8';

    //     // Create the SVG element
    //     const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    //     svg.setAttribute('width', `${size}px`);
    //     svg.setAttribute('height', `${size}px`);
    //     svg.setAttribute('viewBox', '0 0 24 24');
    //     svg.setAttribute('fill', 'none');
    //     svg.setAttribute('stroke', color);
    //     svg.setAttribute('stroke-width', '2');
    //     svg.setAttribute('stroke-linecap', 'round');
    //     svg.setAttribute('stroke-linejoin', 'round');

    //     // Different icon paths
    //     const iconPaths = [
    //         // Heart
    //         'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    //         'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    //         // Gift/Present
    //         'M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z',
    //         // Cake
    //         'M3 20h18v-8a4 4 0 0 0-4-4h-1V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3H7a4 4 0 0 0-4 4v8zm9-16v3M8 8v1M12 8v1M16 8v1',
    //         // Star
    //         'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    //         // Music note
    //         // 'M9 18V5l12-2v13M9 9c-5 0-5 8 0 8s5-8 0-8z',
    //         // Balloon
    //         'M12 2C9 2 6 3.5 6 7c0 3.5 3 5 3 9h6c0-4 3-5.5 3-9 0-3.5-3-5-6-5zM12 16v8M8 20h8',
    //         // Party popper
    //         'M10 10l6-6M3.6 3.6l0.8 0.8M11 3h2M17.6 3.6l-0.8 0.8M21 11v2M17.6 20.4l-0.8-0.8M13 21h-2M6.4 20.4l0.8-0.8M3 13v-2M9.9 9.9C9.2 10.5 8 13 8 13s2.5-1.2 3.1-1.9C11.7 10.5 10.5 9.3 9.9 9.9z'
    //     ];

    //     // Choose a random icon path
    //     const randomIconIndex = Math.floor(Math.random() * iconPaths.length);
    //     const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    //     path.setAttribute('d', iconPaths[randomIconIndex]);
    //     path.setAttribute('fill', randomIconIndex === 0 ? color : 'none'); // Only fill hearts with color

    //     // Add the path to the SVG
    //     svg.appendChild(path);

    //     // Add the SVG to the container
    //     confetti.appendChild(svg);

    //     // Add the container to the confetti ref
    //     confettiRef.current.appendChild(confetti);

    //     // Remove the confetti element after animation completes
    //     setTimeout(() => {
    //         if (confetti.parentNode === confettiRef.current) {
    //             confettiRef.current.removeChild(confetti);
    //         }
    //     }, 6000);
    // };
    const handleNavigate = (section) => {
        setActiveSection(section);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === memories.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? memories.length - 1 : prev - 1));
    };


    useEffect(() => {
        const audio = new Audio(songs[0].url);
        setAudioElement(audio);

        return () => {
            if (audio) {
                audio.pause();
                audio.src = '';
            }
        };
    }, []);

    // Add event listener for song end
    useEffect(() => {
        const handleSongEnd = () => {
            const nextSong = (currentSong + 1) % songs.length;
            setCurrentSong(nextSong);

            if (audioElement) {
                audioElement.src = songs[nextSong].url;
                if (isPlaying) {
                    audioElement.play();
                }
            }
        };

        if (audioElement) {
            audioElement.addEventListener('ended', handleSongEnd);

            return () => {
                audioElement.removeEventListener('ended', handleSongEnd);
            };
        }
    }, [currentSong, isPlaying, songs, audioElement]);

    // Handle play/pause toggle
    const togglePlayPause = () => {
        if (!audioElement) return;

        if (isPlaying) {
            audioElement.pause();
        } else {
            audioElement.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Play a specific song
    const playSong = (index) => {
        if (!audioElement) return;

        setCurrentSong(index);
        audioElement.src = songs[index].url;

        if (isPlaying) {
            audioElement.play();
        } else {
            setIsPlaying(true);
            audioElement.play();
        }
    };



    // const playSong = (index) => {
    //   setCurrentSong(index);
    //   setIsPlaying(true);
    //   audioRef.current.src = songs[index].url;

    // if (isPlaying) {
    //   audioRef.current.play();
    // }
    // };

    // const togglePlayPause = () => {
    //   setIsPlaying(!isPlaying);
    // };


    // For touch handling
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isSwipe = Math.abs(distance) > minSwipeDistance;

        if (isSwipe) {
            if (distance > 0) {
                // Swiped left, show next image
                setImageLoaded(false);
                nextImage();
            } else {
                // Swiped right, show previous image
                setImageLoaded(false);
                prevImage();
            }
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-fuchsia-900 via-purple-900 to-indigo-900 p-4 overflow-hidden">
            {/* 3D Stars background */}
            <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 100 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: `${Math.random() * 4 + 1}px`,
                            height: `${Math.random() * 4 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.8 + 0.2,
                            animation: `twinkle ${Math.random() * 5 + 2}s infinite ease-in-out ${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* Confetti container */}
            <div ref={confettiRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

            {/* Intro animation */}
            {showIntro ? (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black z-50 cursor-pointer"
                    onClick={handleIntroClick}
                >
                    <div className="text-center">
                        <div className="inline-block animate-birthday-reveal">
                            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-indigo-500">
                                Happy Birthday Shukku<span className='text-black'></span>!
                            </span>
                        </div>
                        <div className="mt-8 text-gray-400 font-bold">Click anywhere to continue 😉</div>
                    </div>
                </div>
            ) : (
                <div className={`w-full max-w-4xl transition-all duration-1000 ${introFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    {/* Main container */}
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50">
                        {/* Top decorative accent */}
                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>

                        {/* Content wrapper */}
                        <div className="p-6">
                            {/* Title and navigation */}
                            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-pink-500 to-blue-500 mb-4 md:mb-0">
                                    Shukku
                                </h1>

                                <div className="flex space-x-2 bg-gray-800 p-1 rounded-xl">
                                    <button
                                        onClick={() => handleNavigate('greeting')}
                                        className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${activeSection === 'greeting'
                                            ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                                            : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        <Gift className="w-4 h-4" />
                                        <span>Greeting</span>
                                    </button>
                                    <button
                                        onClick={() => handleNavigate('memories')}
                                        className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${activeSection === 'memories'
                                            ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                                            : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        <Camera className="w-4 h-4" />
                                        <span>Memories</span>
                                    </button>
                                    <button
                                        onClick={() => handleNavigate('music')}
                                        className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${activeSection === 'music'
                                            ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                                            : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        <Music className="w-4 h-4" />
                                        <span>Foryou</span>
                                    </button>
                                    <button
                                        onClick={() => handleNavigate('instagram')}
                                        className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${activeSection === 'instagram'
                                            ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                                            : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        <List className="w-4 h-4" />
                                        <span>More</span>
                                    </button>
                                </div>
                            </div>

                            {/* Content sections */}
                            <div className="min-h-96">
                                {/* Greeting section */}
                                {activeSection === 'greeting' && (
                                    <div className="animate-fade-in">
                                        <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/30">
                                            {/* 3D cake */}
                                            <div className="absolute -top-16 -right-16 w-32 h-32 rotate-12 opacity-30 md:opacity-50">
                                                <div className="relative w-full h-full">
                                                    <div className="absolute bottom-0 w-full h-12 bg-pink-500 rounded-lg transform perspective-800 rotateX-60"></div>
                                                    <div className="absolute bottom-12 w-full h-4 bg-white rounded"></div>
                                                    <div className="absolute bottom-16 w-full h-16 bg-pink-400 rounded-lg"></div>
                                                    <div className="absolute bottom-32 w-full h-4 bg-white rounded"></div>
                                                    <div className="absolute bottom-36 w-full h-8 bg-pink-300 rounded-t-lg"></div>
                                                    <div className="absolute bottom-44 left-1/2 w-2 h-16 bg-yellow-400 transform -translate-x-1/2"></div>
                                                    <div className="absolute bottom-60 left-1/2 w-6 h-6 bg-red-500 rounded-full transform -translate-x-1/2 animate-flame"></div>
                                                </div>
                                            </div>

                                            {/* Flex container for content and image side by side */}
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                                                {/* Left side: Text content */}
                                                <div className="flex flex-col flex-1 items-center md:items-start text-center md:text-left">
                                                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-red-400 to-green-400 mb-6 animate-float">
                                                        Happy Birthday Aishumma <span className='text-black'>❤️🫂</span>!
                                                    </h2>

                                                    <div className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                                                        Hi,
                                                        <br />
                                                        Betryal and direspect
                                                    </div>

                                                    <div className="w-full max-w-xl">
                                                        <div className="grid grid-cols-3 gap-4">
                                                            <div className="bg-gradient-to-br from-pink-500/20 to-pink-700/20 p-4 rounded-xl backdrop-blur-sm border border-pink-600/20 transform transition-transform hover:scale-105 hover:shadow-pink-500/20 hover:shadow-lg">
                                                                <div className="flex justify-center mb-2">
                                                                    <Gift className="w-6 h-6 text-pink-400" />
                                                                </div>
                                                                <div className="text-center text-gray-300 text-sm">
                                                                   Betryal
                                                                </div>
                                                            </div>

                                                            <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 p-4 rounded-xl backdrop-blur-sm border border-purple-600/20 transform transition-transform hover:scale-105 hover:shadow-purple-500/20 hover:shadow-lg">
                                                                <div className="flex justify-center mb-2">
                                                                    <Star className="w-6 h-6 text-purple-400" />
                                                                </div>
                                                                <div className="text-center text-gray-300 text-sm">
                                                                    May all you end up 
                                                                </div>
                                                            </div>

                                                            <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 p-4 rounded-xl backdrop-blur-sm border border-indigo-600/20 transform transition-transform hover:scale-105 hover:shadow-indigo-500/20 hover:shadow-lg">
                                                                <div className="flex justify-center mb-2">
                                                                    <Heart className="w-6 h-6 text-indigo-400" />
                                                                </div>
                                                                <div className="text-center text-gray-300 text-sm">
                                                                    Betryal
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Right side: Image */}
                                                <div className="md:self-center relative group shrink-0">
                                                    <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-pink-500/50 shadow-lg transition-all duration-300">
                                                        <img
                                                            src={suhus}
                                                            alt="Birthday Girl"
                                                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                                            onError={(e) => {
                                                                e.target.onerror = null;
                                                                e.target.src = "https://via.placeholder.com/200?text=Add+Her+Image";
                                                            }}
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                                                            <span className="text-white text-sm font-medium px-3 py-1 rounded-full bg-pink-600/80 backdrop-blur-sm">Happy Birthday!</span>
                                                        </div>
                                                    </div>

                                                    {/* Decorative elements around the image */}
                                                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-75 animate-ping-slow"></div>
                                                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full opacity-75 animate-ping-slow animation-delay-500"></div>
                                                    <div className="absolute top-1/2 -left-4 w-4 h-4 bg-green-400 rounded-full opacity-75 animate-ping-slow animation-delay-1000"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Memories section */}
                                {activeSection === 'memories' && (
                                    <div className="animate-fade-in">
                                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-6">
                                            Our Special Memories
                                        </h2>
                                        <div>
                                            <span className='text-white text-center text-bold'>
                                                click the dot or swipe to navigate images
                                            </span>
                                        </div>

                                        <div
                                            className="relative h-150 mb-6 overflow-hidden rounded-2xl group mt-5 touch-pan-y"
                                            onTouchStart={handleTouchStart}
                                            onTouchMove={handleTouchMove}
                                            onTouchEnd={handleTouchEnd}
                                        >
                                            <div className="absolute inset-0 bg-gray-900 opacity-30 group-hover:opacity-20 transition-opacity duration-300"></div>

                                            {/* Loading indicator - shows only while image is loading */}
                                            <div
                                                className={`absolute inset-0 flex items-center justify-center bg-gray-800 transition-opacity duration-300 ${imageLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                                            >
                                                <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-purple-500 animate-spin"></div>
                                            </div>

                                            <img
                                                src={memories[currentImageIndex].url}
                                                alt={`Memory ${currentImageIndex + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-scale-down"
                                                onLoad={() => setImageLoaded(true)}
                                                onError={() => setImageLoaded(true)} // In case of error, still hide loader
                                                style={{ opacity: imageLoaded ? 1 : 0 }}
                                            />

                                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                                                <p className="text-white text-xl font-medium">
                                                    {memories[currentImageIndex].caption}
                                                </p>
                                            </div>

                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                                            >
                                                <ChevronLeft className="w-6 h-6" />
                                            </button>

                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                                            >
                                                <ChevronRight className="w-6 h-6" />
                                            </button>
                                        </div>

                                        <div className="flex justify-center mb-6">
                                            {memories.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        setImageLoaded(false);  // Reset loader when changing images
                                                        setCurrentImageIndex(index);
                                                    }}
                                                    className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 transform ${index === currentImageIndex
                                                            ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125'
                                                            : 'bg-gray-600 hover:bg-gray-500'
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                        <div className="text-center text-gray-400">
                                         Betryal!
                                        </div>
                                    </div>
                                )}
                                {/* Music section */}
                                {activeSection === 'music' && (
                                    <div ref={musicContainerRef} className="animate-fade-in">
                                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-6">
                                            Playlist For you <span className='text-black'>🥰</span>
                                        </h2>

                                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 mb-6">
                                            <div className="flex items-center gap-4 mb-4">
                                                <button
                                                    onClick={togglePlayPause}
                                                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-lg shadow-pink-500/20 transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/40"
                                                >
                                                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                                                </button>

                                                <div>
                                                    <div className="font-bold text-white text-lg">
                                                        {songs[currentSong].title}
                                                    </div>
                                                    <div className="text-gray-400">
                                                        {songs[currentSong].artist}
                                                    </div>
                                                </div>

                                                <div className="ml-auto text-gray-400">
                                                    {songs[currentSong].duration}
                                                </div>
                                            </div>

                                            <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                                                <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                                                    style={{
                                                        width: isPlaying ? '90%' : '0%',
                                                        transition: 'width 1s linear'
                                                    }}
                                                />
                                            </div>

                                            {/* Audio visualizer */}
                                            {isPlaying && (
                                                <div className="flex items-end justify-center gap-1 h-12 mt-4">
                                                    {Array.from({ length: 12 }).map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className="w-2 bg-gradient-to-t from-pink-500 to-purple-500 rounded-t"
                                                            style={{
                                                                height: `${Math.random() * 100}%`,
                                                                animation: `equalizer ${Math.random() * 0.8 + 0.2}s ease-in-out infinite alternate`
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="grid gap-2">
                                            {songs.map((song, index) => (
                                                <div
                                                    key={song.id}
                                                    onClick={() => playSong(index)}
                                                    className={`group p-4 rounded-xl flex items-center gap-4 cursor-pointer transition-all duration-300 ${index === currentSong
                                                        ? 'bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/20'
                                                        : 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/30'
                                                        }`}
                                                >
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${index === currentSong
                                                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                                                        : 'bg-gray-700 text-gray-300 group-hover:bg-gray-600'
                                                        }`}>
                                                        {index === currentSong && isPlaying ? (
                                                            <div className="flex items-end h-6 space-x-0.5">
                                                                <div className="w-1 bg-red rounded-t h-3 animate-music-bar-1"></div>
                                                                <div className="w-1 bg-white rounded-t h-6 animate-music-bar-2"></div>
                                                                <div className="w-1 bg-white rounded-t h-4 animate-music-bar-3"></div>
                                                            </div>
                                                        ) : (
                                                            <Music className="w-5 h-5" />
                                                        )}
                                                    </div>

                                                    <div className="flex-1">
                                                        <div className={`font-medium ${index === currentSong ? 'text-white' : 'text-gray-300'}`}>
                                                            {song.title}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {song.artist}
                                                        </div>
                                                    </div>

                                                    <div className="text-gray-500">
                                                        {song.duration}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {activeSection === 'instagram' && (
                                    <div className="animate-fade-in">
                                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-6">
                                            Reels For you
                                        </h2>

                                        <div className="mb-4">
                                            <p className="text-gray-300 mb-6">
                                                Check out !
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {instagramReels.map(reel => (
                                                    <div
                                                        key={reel.id}
                                                        onClick={() => openInstagramReel(reel.url)}
                                                        className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl overflow-hidden border border-gray-700/30 cursor-pointer transform transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-pink-500/10"
                                                    >
                                                        <div className="relative aspect-video">
                                                            <img
                                                                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTp5z9BmR9OfZmomwcteWPBTjt8NVdme7Bw&s`}
                                                                alt={reel.title}
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                            />

                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>

                                                            <div className="absolute bottom-3 left-3 right-3">
                                                                <div className="flex items-center">
                                                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                                                                        {/* <Instagram className="w-4 h-4 text-white" /> */}
                                                                    </div>
                                                                    <div className="ml-2">
                                                                        <div className="text-white font-medium text-sm">{reel.title}</div>
                                                                        <div className="text-gray-400 text-xs">{reel.views}</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                <div className="w-16 h-16 rounded-full bg-pink-500/80 flex items-center justify-center">
                                                                    <Play className="w-8 h-8 text-white" fill="white" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="p-4">
                                                            <p className="text-gray-300 text-sm">
                                                                Tap to watch on Instagram
                                                            </p>

                                                            <div className="mt-3 flex items-center text-xs text-gray-500">
                                                                <div className="flex items-center">
                                                                    <Heart className="w-3 h-3 mr-1" />
                                                                    <span>{Math.floor(Math.random() * 500) + 100}</span>
                                                                </div>
                                                                <div className="mx-2">•</div>
                                                                <div>{Math.floor(Math.random() * 20) + 5} comments</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* <div className="flex justify-center mt-6">
                      <button 
                        onClick={() => window.open('https://www.instagram.com/reels', '_blank')}
                        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-pink-500/20 transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/40 flex items-center gap-2"
                      >
                        
                        View More on Instagram
                      </button>
                    </div> */}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="py-4 px-6 text-center text-gray-500 border-t border-gray-700/30">
                            With <span className='text-black'>❤️</span> $ Betryal
                        </div>
                        <div className=' py-4 px-6   text-center border-t '><span className='text-gray-300' > By Suhail</span></div>

                    </div>
                </div>
            )}

            {/* Animations */}
            <style jsx>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.8; }
          }
          
          @keyframes fall {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(100vh) rotate(720deg); }
          }
          
          @keyframes birthday-reveal {
            0% { opacity: 0; transform: scale(0.5) translateY(-50px); filter: blur(10px); }
            100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes flame {
            0%, 100% { transform: scale(1) translateX(-50%); opacity: 1; }
            50% { transform: scale(1.2) translateX(-40%); opacity: 0.8; }
          }
          
          @keyframes equalizer {
            0% { height: 10%; }
            100% { height: 100%; }
          }
          
          @keyframes music-bar-1 {
            0%, 100% { height: 30%; }
            50% { height: 70%; }
          }
          
          @keyframes music-bar-2 {
            0%, 100% { height: 90%; }
            50% { height: 40%; }
          }
          
          @keyframes music-bar-3 {
            0%, 100% { height: 40%; }
            50% { height: 80%; }
          }
          
          .perspective-800 {
            perspective: 800px;
          }
          
          .rotateX-60 {
            transform: rotateX(60deg);
          }
          
          .animate-birthday-reveal {
            animation: birthday-reveal 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .music-animate-in {
            animation: musicAnimateIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
          
          @keyframes musicAnimateIn {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}</style>
        </div>
    );
}

export default BirthDay
