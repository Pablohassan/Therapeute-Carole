// import React from 'react';
// import { motion } from 'framer-motion';

// const AboutSectionPart2: React.FC = () => {
//     return (
//         <section className="flex items-center justify-center h-full bg-stone-100" id="about-part2">
//             <div
//                 className="container mx-auto px-4 md:px-8 py-8"
//                 style={{
//                     backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(0,0,0,0.01) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0,0,0,0.01) 2%, transparent 0%)',
//                     backgroundSize: '100px 100px'
//                 }}
//             >
//                 <div className="space-y-12 max-w-6xl mx-auto">
//                     {/* Quote with elegant styling */}
//                     <motion.div
//                         className="text-center"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.8, delay: 0.6 }}
//                         viewport={{ once: true }}
//                     >
//                         <p className="text-2xl md:text-3xl lg:text-4xl font-dancing font-light italic text-stone-700 mb-10"
//                             style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
//                         >
//                             « Que pouvons-nous faire ensemble ? »
//                         </p>

//                         <div className="text-md md:text-lg text-stone-600 max-w-4xl mx-auto leading-relaxed text-justify md:text-center">
//                             <p className="mb-4 italic">
//                                 Vous appréhendez le retour à la maison, les relations sont tendues, les conflits récurrents.
//                             </p>
//                         </div>
//                     </motion.div>

//                     {/* Context section */}
//                     <motion.div
//                         className="mt-8"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.8 }}
//                         viewport={{ once: true }}
//                     >
//                         <div className="text-lg text-stone-800 max-w-5xl mx-auto mb-8 bg-white/70 p-12 rounded-lg shadow-sm">
//                             <p className="mb-4 font-montserrat font-medium text-xl">Que cela concerne votre contexte familial :</p>
//                             <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 pl-6"
//                                 style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
//                             >
//                                 <li className="flex items-center">
//                                     <span className="text-stone-400 mr-2">•</span>
//                                     <span>Votre jeune enfant</span>
//                                 </li>
//                                 <li className="flex items-center">
//                                     <span className="text-stone-400 mr-2">•</span>
//                                     <span>Votre adolescent</span>
//                                 </li>
//                                 <li className="flex items-center">
//                                     <span className="text-stone-400 mr-2">•</span>
//                                     <span>Un adulte ou vous-même</span>
//                                 </li>
//                                 <li className="flex items-center">
//                                     <span className="text-stone-400 mr-2">•</span>
//                                     <span>Votre couple (conjugalité)</span>
//                                 </li>
//                                 <li className="flex items-center">
//                                     <span className="text-stone-400 mr-2">•</span>
//                                     <span>La relation avec vos enfants (parentalité)</span>
//                                 </li>
//                             </ul>
//                             <p>Ou que cela concerne votre contexte professionnel ou social, nous pouvons vous accompagner.</p>
//                         </div>

//                         <div className="text-center mt-8">
//                             <motion.p
//                                 className="text-xl md:text-2xl lg:text-3xl italic text-stone-700 py-4 px-8 rounded-lg inline-block"
//                                 style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
//                                 initial={{ scale: 0.90 }}
//                                 whileInView={{ scale: 1.15 }}
//                                 transition={{ duration: 2 }}
//                                 viewport={{ once: true }}
//                             >
//                                 Et si on en parlait ?
//                             </motion.p>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutSectionPart2; 