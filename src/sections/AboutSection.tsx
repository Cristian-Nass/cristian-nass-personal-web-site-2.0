import { motion } from 'motion/react'
import '../styles/sections.css'

const aboutLines = [
  'I am an experienced software engineer with a robust background in programming, boasting a proven track record of successfully developing a diverse range of applications.',
  'Throughout my career, I have made significant contributions to numerous projects, both collaboratively and independently.',
  '',
  'In recent years, I have specialized in front-end development, utilizing advanced libraries and frameworks such as React, Angular, and Vue.',
  'My proficiency extends to complementary technologies like NodeJS, Firebase, Github, GitAction, RestAPI, and Docker.',
  '',
  'I honed my skills by creating various websites and web applications using HTML, CSS, jQuery, and vanilla JavaScript.',
  '',
  'While my earlier experiences involved developing Android applications using Java with the Eclipse IDE during the Android 4 era, I also built applications for Windows using Windows Forms and C#.',
  '',
  'Currently, my primary goal is to further expand my expertise in front-end development and TypeScript I am exploring additional tools like NextJS, NodeJS, and Docker to enhance my skill set.',
  '',
  'Committed to continuous learning, I actively seek opportunities to stay abreast of the latest developments in the field. Also, I am interested in expanding my knowledge about micro-frontend, React native, and more.',
]

const AboutSection = () => {
  return (
    <motion.div
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.35 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.18,
          },
        },
      }}
    >
      {aboutLines.map((line, index) =>
        line ? (
          <motion.p
            key={`${line.slice(0, 20)}-${index}`}
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: 'easeOut' },
              },
            }}
            style={{ margin: 0 }}
          >
            {line}
          </motion.p>
        ) : (
          <div key={`spacer-${index}`} style={{ height: '1rem' }} />
        )
      )}
    </motion.div>
  )
}

export default AboutSection