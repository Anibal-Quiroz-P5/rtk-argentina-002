"use client"

import React from 'react'
import * as Accordion from '@radix-ui/react-accordion';

const items = [
  {
    question: "¿Qué es NTRIP? ",
    answer:     "NTRIP es el acrónimo de Networked Transport of RTCM via Internet Protocol, que refiere al transporte en red de datos en formato RTCM vía protocolo de Internet. O, en palabras más simples, es el nombre para la transmisión de datos de navegación satelital a través de Internet. Básicamente, esto implica que los receptores GNSS no emitirán o recibirán correcciones de posición por medio de una radio interna o externa (UHF, VHF, etc.), sino que por el conocido protocolo HTTP de Internet (sí, las mismas letras que tecleas para ingresar a un sitio web). Este es un gran punto a favor para NTRIP, ya que la comunicación a través de señales de radio puede ser interrumpida fácilmente por obstrucciones propias del terreno (edificios, montañas, vegetación, entre otras) y por redes eléctricas o aparatos electrónicos. "
  },
  {
    question: "¿Qué es GNSS RTK?",
    answer:     "GNSS RTK es una tecnología que utiliza el Sistema Global de Navegación por Satélite (GNSS) para lograr un posicionamiento en tiempo real de alta precisión. Se basa en una combinación de señales de sistemas satelitales como GPS, GLONASS, Galileo y BeiDou, y proporciona una corrección instantánea de la posición en el terreno. "
  },
  {
    question: "¿Cúales son las aplicaciones mas comunes de GNSS RTK? \r\n",
    answer:     "Las aplicaciones mas comunes de GNSS son: Topografía y cartografía: GNSS RTK permite a los topógrafos y cartógrafos crear redes geodésicas de alta precisión, realizar trabajos catastrales y producir mapas de terreno precisos.    Construcción e ingeniería: GNSS RTK se utiliza para monitorear la precisión del trabajo de construcción, posicionar equipos de construcción y realizar mediciones geodésicas en sitios de construcción.    Agricultura de precisión: GNSS RTK ayuda a las empresas agrícolas a optimizar la gestión del campo, la aplicación precisa de fertilizantes y la planificación del riego.    Geología y minería: en la industria de la geología y la minería, GNSS RTK se utiliza para crear modelos de terreno precisos, realizar estudios geológicos y geotécnicos y planificar y controlar operaciones de levantamiento en minas y minas.    Transporte y logística: GNSS RTK se utiliza para posicionamiento preciso de vehículos, seguimiento y optimización de rutas, control de transporte de mercancías y gestión de operaciones logísticas.    Energía: en la industria de la energía, GNSS RTK se utiliza para posicionar y monitorear la construcción de instalaciones energéticas, como parques eólicos y solares, así como para el mantenimiento y monitoreo de la infraestructura energética.    Ecología y conservación: GNSS RTK se utiliza en la investigación ecológica y de conservación, por ejemplo, para monitorear y mapear cambios en la cubierta vegetal, evaluar la biodiversidad y monitorear el estado de los ecosistemas.    Ingeniería civil y planificación municipal: GNSS RTK se utiliza para el posicionamiento de objetos de ingeniería civil como carreteras, puentes y edificios, así como para el desarrollo y control de planes de desarrollo municipal para ciudades y territorios. "
  },
  {
    question: "Nuevos productos de u-blox",
    answer:     "u-blox IRIS-W10 Modules - u-blox ANNA-B112 Stand-alone BLUETOOTH® 5 Modules - u-blox EVK-M8F Evaluation Kit "
  },
  {
    question: "¿Qué es una estacion base en gnss?",
    answer:     "La estación base GNSS RTK es una herramienta topográfica profesional con un equilibrio ideal entre confiabilidad y costo. GNSS La estación base RTK transmite correcciones a través de Internet. "
  },
]

const Faq = () => {
  return (
    <div className='flex flex-col w-full py-[48px]'>
      <div>
        <h3 className='text-[#EB2891] text-[14px] font-medium'>
        Preguntas Frecuentes {/* Frequently Asked Questions */}
           </h3>
           <h1 className='py-4 text-2xl font-medium text-[#172026]'> Aclaremos algunas de las dudas frecuentes{/* Let's clarify some of your questions */}</h1>
           <p className='text-whi'>
            Este es un extracto de algunas de las preguntas elegidas al azar que nos hicieron nuestros clientes:
           </p>
      </div>
      <div>
        <Accordion.Root
          type="single"
          defaultValue={""}
          collapsible
          className='flex flex-col gap-y-4'
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item 
                value={`item-${index + 1}`} 
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
              >
                <Accordion.Trigger className="w-full h-full">
                  <div className="flex flex-col">
                    <p>{item.question}</p>
                    <Accordion.Content>
                      <p>{item.answer}</p>
                    </Accordion.Content>
                  </div>
                </Accordion.Trigger>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  )
}

export default Faq