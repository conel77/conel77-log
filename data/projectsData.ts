interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  linkText?: string
}

const projectsData: Project[] = [
  {
    title: 'Anomaly Image Generation with Diffusion and Adapter',
    description: `To address the data scarcity and out-of-distribution issues in anomaly detection, we proposed a novel image generation method combining DreamBooth and Text-to-Image Adapter. By conditioning on anomaly masks, our model enables diffusion-based generation of realistic anomaly images. A reconstruction loss was added to ensure quality and consistency. This method outperformed SOTA models on AUROC, AP, IS, and IC-LPIPS, and was published in IEEE ACCESS.`,
    imgSrc: '/static/images/anodapter.png', 
    href: 'https://ieeexplore.ieee.org/abstract/document/11000123',
    linkText: 'View Papers', 
  },
  {
    title: 'Industrial Anomaly Image Generation with User-Specified Masks',
    description: `In collaboration with ANI, we developed a generative model to synthesize large-scale anomaly images from limited industrial datasets. By conditioning on user-specified masks, our model combines StyleGAN with SPADE to generate anomalies that precisely match mask regions. We also implemented an auto-mask generation module using object position priors for consistency and automation. The proposed model achieved a 1.8% improvement in IS and 10% gain in IC-LPIPS over standard GANs, while maintaining performance under limited memory. Applied to real-world datasets such as display defect and dental amalgam (teeth), the model demonstrated strong performance in industrial anomaly detection tasks. A diffusion-based variant is currently under training.`,
    imgSrc: '/static/images/anomaly-gen.png',
    href: 'https://www.anieng.com/',
    linkText: 'View Sites',
  },
  {
    title: 'AI Driving Assistant for Beginner Drivers',
    description: `Developed a vision-based driving assistant system to help beginner drivers better perceive road conditions. Using dashcam footage from Honda Research Institute, we built a YOLO-based object detection model and a custom distance estimation module based on vehicle centroid height. The system distinguishes road/sidewalk regions, detects nearby hazards within 15 meters, and provides voice alerts. A navigation-integrated web app was also developed. The project won the Capstone Design Grand Prize and resulted in a published paper.`,
    imgSrc: '/static/images/aidriver.png', 
    href: 'https://drive.google.com/file/d/1vwztgh11x2fgFMDQqSlqwk-ma-oXXdNi/view?usp=sharing', 
  },
  {
    title: 'AI Navigation Assistant for the Visually Impaired',
    description: `Designed a real-time object detection and voice guidance system to assist visually impaired individuals in navigating pedestrian environments. Collected custom datasets for non-COCO hazards (e.g., e-scooters, bollards) to improve detection coverage. Implemented a distance estimation algorithm using average object heights and quantified risk levels based on proximity. The system also recognized traffic lights to infer crosswalk presence and issued real-time alerts. The project won a prize at the Ajou University Software Competition and was filed for patent.`,
    imgSrc: '/static/images/vision-aid.png', 
    href: 'https://drive.google.com/file/d/19Yl5dtVW5sfSoJSnVQ5IpwFLjrN7KK2S/view?usp=sharing', 
  },
]

export default projectsData
