import Biography from "@/pages/Biography";
import { useNavigate } from "react-router-dom";

const BiographyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* button */}
      {/* <button 
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        Back
      </button> */}
      <Biography
        mainImage= "/sir.jpg"
        secondaryImage="/don3.webp"
        biography={`Formforge, founded in 2016 by visionary architect Abhinav Goyal, is a trailblazing studio dedicated to the confluence of art, design, and engineering.\n 
At the heart of Formforge’s ethos lies an unwavering commitment to transforming imagination into tangible realities. \n 
With expertise in bespoke metal craftsmanship and complex technical fabrication, the studio’s creations transcend traditional boundaries, embodying a union of advanced technology and timeless artistry.\n 
Abhinav Goyal, the pioneering force behind Formforge, brings a rich architectural background and an unyielding passion for exploring the intersection of art and engineering.\n 
A graduate in architecture, Goyal honed his skills through years of industry experience before embarking on his entrepreneurial journey. \n 
Guided by a vision to redefine design, he has consistently pushed the boundaries of what is possible, creating works that reflect both artistic symbolism and technical mastery. \n 
Goyal’s approach seamlessly integrates advanced digital techniques with traditional craftsmanship, resulting in a diverse range of projects that include large-scale sculptures, bespoke installations, and intricate architectural solutions.\n 
His work reflects a deep understanding of materiality, often leveraging metals and other innovative materials to craft pieces that evoke a sense of wonder and timelessness.\n 
A dedicated mentor and thought leader, Goyal actively nurtures emerging designers across the globe. \n 
His philosophy emphasizes the importance of material innovation, sustainable practices, and a curiosity-driven approach to design. \n 
By fostering a culture of learning and experimentation, he has cultivated a distinct visual language that positions Formforge as a leader in contemporary art and design.`}
        artistStory={`Formforge’s creations are more than just objects, they are transformative experiences. \n 
Each work is meticulously designed to harmonize with its environment, adapting to changing light, weather, and perspective. \n 
By blending parametric design and digital fabrication techniques with human craftsmanship, the studio produces works that captivate audiences and leave a lasting impression.\n 
The studio’s philosophy is rooted in the belief that design transcends mere visual appeal.\n 
It is a powerful medium for storytelling, capable of reshaping spaces and fostering a deeper connection between people and their environment.\n 
Whether it is a monumental public installation, a statement sculpture, or a custom architectural piece, Formforge’s works inspire dialogue and engagement, offering a fresh perspective on the role of art and design in modern life.`}
        thirdImage="/DON5.jpg"
        thirdStory={`Since its inception, Formforge has garnered widespread acclaim for its pioneering approach to design and craftsmanship. \n 
With over 400 installations spanning government, commercial, residential, and hospitality sectors, the studio has become a trusted partner for visionary clients across the globe. \n 
Celebrated for its originality and technical excellence, Formforge's work has been prominently featured in prestigious art and design publications. \n 
Notable accolades include showcases at India Design ID in 2020 and 2024, with an upcoming groundbreaking display at ID 2024 that promises to redefine industry norms and set new benchmarks in design innovation.\n 
Formforge’s creations are more than artistic installations, they are transformative focal points of urban and architectural spaces.\n 
Seamlessly blending opulence with ingenuity, these works redefine environments and elevate human experiences. \n 
The studio’s ability to push the boundaries of art and design has solidified its position as a trailblazer in the global creative landscape, fostering meaningful connections between art, technology, and the communities it serves.\n 
Looking ahead, Formforge remains committed to innovation, sustainability, and crafting designs that inspire and endure. \n 
With each project, the studio continues to shape a future where creativity and craftsmanship converge to leave a lasting impact on the world.`}
        fourthImage="/don1.webp"
        fourthStory={`We are passionate about creating art that is not only visually stunning but also meaningful and impactful. \n 
We believe that art has the power to transform spaces and lives, and we are dedicated to using our creativity to make a positive difference in the world. \n 
Our work is inspired by the beauty of nature, the complexity of human emotions, and the endless possibilities of technology. \n 
We strive to create art that is both timeless and relevant, that speaks to the human experience and inspires wonder and awe.`}
      />
    </div>
  );
};

export default BiographyPage;
