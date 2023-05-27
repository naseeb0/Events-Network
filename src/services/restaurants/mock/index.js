import antwerp from "./antwerp.json";
import chicago from "./chicago.json";
import toronto from "./toronto.json";
import san_francisco from "./san_francisco.json";

export const mocks = {
  "51.219448,4.402464": antwerp,
  "43.653225,-79.383186": toronto,
  "41.878113,-87.629799": chicago,
  "37.7749295,-122.4194155": san_francisco,
};

export const mockImages = 
[
  {
    "name": "React JS Workshop",
    "image": "https://github.com/naseeb0/SpringBoot/assets/64632758/50bc0059-3744-41a3-bc46-720872bd641c"
  },
  {
    "name": "Flutter Workshop",
    "image": "https://github.com/naseeb0/SpringBoot/assets/64632758/be7a1408-2ca7-4580-a00e-bbc54123798e"
  },
  {
    "name": "Python Workshop",
    "image": "https://github.com/naseeb0/SpringBoot/assets/64632758/c62c35f0-f54f-4c16-aac1-0db2a13d3aaa"
  },
  {
    "name": "JavaScript Workshop",
    "image": "https://github.com/naseeb0/SpringBoot/assets/64632758/b66acb4b-a1d2-41ca-99d2-5dd0c0d6a620"
  },
  {
    "name": "Data Science Workshop",
    "image": "https://github.com/naseeb0/SpringBoot/assets/64632758/9d8c8b62-ed7e-4860-92eb-a4666d06fd29"
  },
  {
    "name": "Machine Learning Workshop",
    "image": "https://github.com/naseeb0/SpringBoot/assets/64632758/664949a1-66c2-4020-9697-6a724e06beef"
  },
  {
    "name": "Artificial Intelligence Workshop",
    "image": "https://github.com/naseeb0/SpringBoot/assets/64632758/df54d691-33ea-4cd3-b331-79558f8803c5"
  },
  {
    "name": "Web Development Workshop",
    "image": "https://github.com/naseeb0/SpringBoot/assets/64632758/76114b94-b91a-48ed-9db8-65d8fcb05476"
  },
  {
    "name": "React Native Workshop",
    "image": "https://github.com/naseeb0/SpringBoot/assets/64632758/10b1c078-e983-4bf5-85e2-2877672d0827"
  },
  {
    "name": "Cybersecurity Workshop",
    "image": "https://github.com/naseeb0/SpringBoot/assets/64632758/6ebdcd95-ad32-4193-92f7-7daad60d681b"
  },
  {
    "name": "Blockchain Workshop",
    "image": "https://github.com/naseeb0/SpringBoot/assets/64632758/f56e1bf5-17f0-4926-b49c-aef67e8a2b3b"
  },
  {
    "name": "Cloud Computing Workshop",
    "image": "https://github.com/naseeb0/SpringBoot/assets/64632758/4547fa75-0c99-4a8f-b0b8-d5f1632a7afd"
  },
  {
    "name": "Internet of Things (IoT) Workshop",
    "image": "https://github.com/naseeb0/SpringBoot/assets/64632758/530e3079-8066-475f-a9b7-aaa7998ed12d",
  },
  {
    "name": "Game Development Workshop",
    "image": "https://github.com/naseeb0/SpringBoot/assets/64632758/09e51991-e3ee-4003-9ba1-7afbb4a82683"
  },
  {
    "name": "Microsoft Azure Workshop",
    "image": "https://github.com/naseeb0/SpringBoot/assets/64632758/53dab260-b3cc-47a7-a258-354f4e82f90b"
  }
    ]

;

export const getImageUrlByName = (name) => {
  const language = mockImages.find((img) => img.name === name);
  return language ? language.image : null;
};