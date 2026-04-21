import TypewriterTitle from "./TypewriterTitle";

export default function Certificates() {
  const certificates = [
    { id: 19, img: '19.png', link: 'https://www.credly.com/badges/6def5e6e-75d6-4f5e-9444-c9a1d5a33266/linked_in_profile' },
    { id: 18, img: '18.png', link: 'https://drive.google.com/file/d/19EmhVJmGpV135PFLABDqbaPna-a8wz8t/view' },
    { id: 0, img: '0.png', link: 'https://drive.google.com/file/d/17Gwa54_gTP9hAjUl8dT4mNFcz3lQm1ZF/view' },
    { id: 16, img: '16.png', link: 'https://www.udemy.com/certificate/UC-f8670fcd-be21-4fa3-ab0a-cf08b4910f4d/' },
    { id: 17, img: '17.png', link: 'https://www.udemy.com/certificate/UC-f0b7aa68-2602-4d2e-a8aa-9b2637975a87/' },
    { id: 15, img: '15.png', link: 'https://skills.yourlearning.ibm.com/certificate/share/13fa4430b6ewogICJsZWFybmVyQ05VTSIgOiAiMTA3OTEyMFJFRyIsCiAgIm9iamVjdElkIiA6ICJVREVNWS0xNTA5ODE2IiwKICAib2JqZWN0VHlwZSIgOiAiQUNUSVZJVFkiCn05440e86752-10' },
    { id: 1, img: '1.png', link: 'https://skills.yourlearning.ibm.com/certificate/share/34f899dfd1ewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgIm9iamVjdElkIiA6ICJQTEFOLTczMjU1QUI2Nzc4RiIsCiAgImxlYXJuZXJDTlVNIiA6ICIxMDc5MTIwUkVHIgp9907684fb79-10' },
    { id: 2, img: '2.png', link: 'https://skills.yourlearning.ibm.com/certificate/share/23a77a3d0bewogICJvYmplY3RJZCIgOiAiVURFTVktODAyOTQ2IiwKICAib2JqZWN0VHlwZSIgOiAiQUNUSVZJVFkiLAogICJsZWFybmVyQ05VTSIgOiAiMTA3OTEyMFJFRyIKfQ07b7a70ec8-10' },
    { id: 3, img: '3.png', link: 'https://skills.yourlearning.ibm.com/certificate/share/c7695b7a2bewogICJvYmplY3RJZCIgOiAiVURFTVktNzgyNDI4IiwKICAibGVhcm5lckNOVU0iIDogIjEwNzkxMjBSRUciLAogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIKfQfa7bedc39c-10' },
    { id: 4, img: '4.png', link: 'https://skills.yourlearning.ibm.com/certificate/share/ae5c4a2a9aewogICJvYmplY3RJZCIgOiAiVURFTVktOTQwNzQwIiwKICAibGVhcm5lckNOVU0iIDogIjEwNzkxMjBSRUciLAogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIKfQfea94bc3f5-10' },
    { id: 5, img: '5.png', link: 'https://skills.yourlearning.ibm.com/certificate/share/30e592a143ewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgIm9iamVjdElkIiA6ICJVREVNWS0xMjQ5NDE0IiwKICAibGVhcm5lckNOVU0iIDogIjEwNzkxMjBSRUciCn016729b0799-10' },
    { id: 6, img: '6.png', link: 'https://skills.yourlearning.ibm.com/certificate/share/ad6c82b8b8ewogICJvYmplY3RJZCIgOiAiVURFTVktMTE5Mjg0OCIsCiAgImxlYXJuZXJDTlVNIiA6ICIxMDc5MTIwUkVHIiwKICAib2JqZWN0VHlwZSIgOiAiQUNUSVZJVFkiCn0bc0473a20b-10' },
    { id: 7, img: '7.png', link: 'https://skills.yourlearning.ibm.com/certificate/share/cc93c374ebewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgImxlYXJuZXJDTlVNIiA6ICIxMDc5MTIwUkVHIiwKICAib2JqZWN0SWQiIDogIlVSTC1FNUI3QTRGNzZCOUIiCn01bea0694b1-10' },
    { id: 14, img: '14.png', link: 'https://www.udemy.com/certificate/UC-0a5a03e1-1ef3-45c3-8363-c599a873ffbe/' },
    { id: 8, img: '8.png', link: 'https://www.credly.com/badges/2fc30121-2640-49e8-9b12-c78229caa626/public_url' },
    { id: 9, img: '9.png', link: 'https://www.credly.com/badges/933c40a7-58db-4543-99e3-fae922ba4e55/public_url' },
    { id: 10, img: '10.png', link: 'https://www.credly.com/badges/0879c551-9dcc-4d10-a121-54dbe8ba2ebb/public_url' },
    { id: 11, img: '11.png', link: 'https://www.credly.com/badges/76d2faf0-adfe-4851-82e5-3776b36537fe/public_url' },
    { id: 12, img: '12.png', link: 'https://www.credly.com/badges/be12d17f-ba5d-42fd-9a05-fc3146240288/public_url' },
    { id: 13, img: '13.png', link: 'https://www.credly.com/badges/167c5348-126e-4e0c-ab07-5b069e4158e5/public_url' },
  ];

  return (
    <section id="certificados" className="w-full pt-2 scroll-mt-24 relative">
      <div className="flex items-center mb-10 border-b border-brand-green/30 pb-4">
        <TypewriterTitle 
          text="CERTIFICACIONES" 
          className="text-3xl md:text-5xl font-bold text-white tracking-wider mb-2" 
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certificates.map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="group relative block aspect-video rounded-sm border border-brand-green/30 bg-black/50 hover:bg-brand-green/10 transition-colors cursor-crosshair hover:z-50"
          >
            {/* 1. Scane animation (Layer background) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-sm">
                <div className="absolute inset-0 z-10 
                bg-gradient-to-b from-transparent via-brand-green/20 to-transparent 
                translate-y-[-100%] md:group-hover:animate-[glitch_1.5s_linear_infinite]"></div>
            </div>

            {/* 2. Scaling Container for Image, Loading Bar & Corners */}
            <div className="w-full h-full relative transition-all duration-500 md:group-hover:scale-[1.3] z-30 shadow-none md:group-hover:shadow-[0_0_30px_rgba(0,255,65,0.4)]">
                <img
                  src={`/img/certificados/${cert.img}`}
                  alt={`Certificado ${cert.id}`}
                  className="w-full h-full object-cover md:grayscale md:opacity-70 md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-500 rounded-sm"
                />
                
                {/* Visual Loading Line (Hacker style) */}
                <div className="absolute bottom-0 left-0 h-[3px] bg-brand-green w-0 md:group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_8px_#00FF41]"></div>

                {/* 3. Glowing corner brackets moved inside to scale with the certificate */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-green/30 md:group-hover:border-brand-green transition-colors duration-300 z-40"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-green/30 md:group-hover:border-brand-green transition-colors duration-300 z-40"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-green/30 md:group-hover:border-brand-green transition-colors duration-300 z-40"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-green/30 md:group-hover:border-brand-green transition-colors duration-300 z-40"></div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
