import React from 'react';
import Image from 'next/image';
import { VideoCameraIcon } from '@heroicons/react/solid';
import { CameraIcon, EmojiHappyIcon } from '@heroicons/react/outline';

function InputBox() {

    return(
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image 
                    className="rounded-full"
                    src="/ga.jpg"
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <form className="flex flex-1">
                    <input className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" type="text" placeholder="Apa yang ada di benakmu?" />
                    <button hidden type="submit">Submit</button>
                </form>
            </div>

            <div className="flex justify-evenly p-3 border-t">
                <div className="flex">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="ml-1 text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>

                <div className="flex">
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="ml-1 text-xs sm:text-sm xl:text-base">Photo/Video</p>
                </div>

                <div className="flex">
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className="ml-1 text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox;