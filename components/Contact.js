import Image from 'next/image';

function Contact({ src, name }) {
    return(
        <div>
            <Image 
                className="rounded-full"
                objectFit="cover"
                src={src}
                width={50}
                height={50}
            />
            <p className="p-1">{name}</p>
        </div>
    )
}

export default Contact;