(this["webpackJsonpserverless-security"]=this["webpackJsonpserverless-security"]||[]).push([[0],[,function(e,t,a){},,,function(e,t,a){e.exports=a(20)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/vivek.f18d7b1e.png"},function(e,t,a){e.exports=a.p+"static/media/Sowjanya.2475e907.png"},function(e,t,a){e.exports=a.p+"static/media/Pravarsha.3d775fa7.png"},function(e,t,a){e.exports=a.p+"static/media/Sowmya.747f79b3.png"},function(e,t,a){e.exports=a.p+"static/media/SaiKumar.9f602f6e.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(3),l=a.n(s);a(13);var r=function(){const[e,t]=Object(n.useState)(!1);return i.a.createElement("nav",null,i.a.createElement("div",{className:"hamburger",onClick:()=>{t(!e)}},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("ul",{className:e?"open":""},i.a.createElement("li",null,i.a.createElement("a",{href:"#home",className:"home-link"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{href:"#content"},"Findings")),i.a.createElement("li",null,i.a.createElement("a",{href:"#taxonomy"},"Taxonomy")),i.a.createElement("li",null,i.a.createElement("a",{href:"#team"},"Team"))))};a(1);var c=function(){return i.a.createElement("section",{id:"home",className:"section"},i.a.createElement("div",{className:"hero"},i.a.createElement("h1",{className:"main-title"},"Security for Serverless Computing"),i.a.createElement("p",null,"Increased usage of serverless computing came up with several security constraints that must be put into consideration. These include function isolation, function data privacy, and secure chaining of functions. Function isolation is important as no one function has direct access to another and thereby pinpoints a compromised system."),i.a.createElement("p",null,"Another major issue is data privacy, especially for a facility that extends into a multi-tenant area where users\u2019 information might become vulnerable for sharing. Secure function chaining in which several functions are invoked consecutively have also been identified to pose serious problems such as code injection and privilege escalation. These threats mostly get access to vulnerabilities within the serverless frameworks, which in the end results in unauthorized access or even data breaches."),i.a.createElement("p",null,"To overcome these issues, strong cybersecurity should be provided by regular IAM practices, security audits, and the need for monitoring tools. By paying attention to these aspects, organizations will be in a position to improve the security of serverless applications while minimizing the risks posed by this more popular computing model.")),i.a.createElement("h2",{className:"h2"},"Key Challenges"),i.a.createElement("div",{className:"challenges-container"},[{title:"Data Privacy",description:"Implement automated threat detection systems to monitor and manage security risks dynamically."},{title:"Function Isolation",description:"Employ technologies like MicroVMs and Unikernels for better function isolation in FaaS applications."},{title:"Securing Function Chaining",description:"Utilize Attack Tree and Attack-Defense Tree methodologies, combined with a Relative Risk Matrix, to quantify and analyze security risks associated with function chaining."},{title:"Cold Starts",description:"Use sandbox pooling and lightweight VM technologies like Firecracker to reduce cold start delays."}].map((e,t)=>i.a.createElement("div",{key:t,className:"challenge-card"},i.a.createElement("div",{className:"card-inner"},i.a.createElement("div",{className:"card-front"},i.a.createElement("h2",null,e.title)),i.a.createElement("div",{className:"card-back"},i.a.createElement("p",null,e.description)))))))};var o=function(){return i.a.createElement("section",{id:"content",className:"content-section"},i.a.createElement("h2",{className:"taxh2"},"Findings"),i.a.createElement("ul",null,i.a.createElement("li",null,"Scalability and cost benefits, but introduces latency and security challenges."),i.a.createElement("li",null,"Identifies insufficient security controls within serverless environments; recommends implementing encryption, IAM, and secure execution environments to mitigate risks."),i.a.createElement("li",null,"Highlights the necessity for real-time threat detection mechanisms to effectively mitigate risks like DoS attacks and data leakage between tenants."),i.a.createElement("li",null,"Demonstrates that serverless computing provides significant cost savings and operational management ease, but also reveals challenges such as cold start latency and potential vendor lock-in."),i.a.createElement("li",null,"Shows that the proposed architecture can provide substantial scalability and performance enhancements, but it also adds complexity to resource management and deployment processes."),i.a.createElement("li",null,"Serverless computing enhances resource allocation efficiency, reducing over-provisioning costs in traditional cloud models."),i.a.createElement("li",null,"Serverless computing can offer high scalability and cost-efficiency, but key challenges such as cold start issues, resource constraints, and security vulnerabilities need further research and optimization."),i.a.createElement("li",null,"There is a growing need for better monitoring tools to track security incidents in serverless environments."),i.a.createElement("li",null,"The use of Attack-Defense Tree methodologies enhances security planning by providing a structured approach to identify vulnerabilities.")))};a(14);var m=function(){return i.a.createElement("section",{id:"taxonomy",className:"tax-section"},i.a.createElement("h2",{className:"taxh2"},"Taxonomy"),i.a.createElement("div",{className:"table-container"},i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Paper Name"),i.a.createElement("th",null,"Problem "),i.a.createElement("th",null,"Solution "),i.a.createElement("th",null,"Protocol Used"),i.a.createElement("th",null," Methodology"),i.a.createElement("th",null,"Applications"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("strong",null,"Survey on Serverless Computing")),i.a.createElement("td",null,"Explores the current state of serverless computing technologies, identifying benefits, limitations, and adoption trends."),i.a.createElement("td",null,"Conducts a comprehensive survey of serverless models, benefits, and challenges."),i.a.createElement("td",null,"Function-as-a-Service (FaaS) and Backend-as-a-Service (BaaS)."),i.a.createElement("td",null,"Performs a comparative analysis of performance, scalability, and cost-effectiveness."),i.a.createElement("td",null,"Applicable to cloud-based services in e-commerce, finance, and various industries.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("strong",null,"Serverless Computing: A Security Perspective")),i.a.createElement("td",null,"Investigates the critical security challenges faced in serverless platforms and their inherent risks."),i.a.createElement("td",null,"Proposes a robust multi-layered security framework designed specifically for addressing serverless platform vulnerabilities."),i.a.createElement("td",null,"Primarily focuses on securing Function-as-a-Service (FaaS) environments."),i.a.createElement("td",null,"Conducts a thorough vulnerability analysis and a detailed comparison of existing security controls."),i.a.createElement("td",null,"Targets cloud services that require heightened security measures, particularly in sectors like finance and healthcare.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("strong",null,"Securing Serverless Computing: Challenges, Solutions, and Opportunities")),i.a.createElement("td",null,"Examines the unique security risks associated with serverless computing in dynamic, scalable environments."),i.a.createElement("td",null,"Proposes advanced techniques for privacy preservation and effective attack detection to address security concerns."),i.a.createElement("td",null,"Focuses on both Function-as-a-Service (FaaS) and Backend-as-a-Service (BaaS) security mechanisms."),i.a.createElement("td",null,"Conducts a comprehensive risk assessment and evaluates the effectiveness of various performance-security trade-offs."),i.a.createElement("td",null,"Specifically applicable to high-security sectors such as finance, healthcare, and government services that are adopting serverless architectures.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("strong",null,"Serverless Computing: Advantages, Limitations, and Use Cases")),i.a.createElement("td",null,"Analyzes the trade-offs between the advantages and limitations of adopting serverless computing models."),i.a.createElement("td",null,"Provides detailed case studies that analyze the performance and outcomes of various serverless applications."),i.a.createElement("td",null,"Primarily focuses on Function-as-a-Service (FaaS) and its operational impacts."),i.a.createElement("td",null,"Conducts performance and cost analysis based on real-world examples to highlight practical implications."),i.a.createElement("td",null,"Applies to a wide range of cloud applications, including web applications, Internet of Things (IoT) services, and event-driven workflows.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("strong",null,"Innovative Approaches to Serverless Computing: A Novel Architecture Perspective")),i.a.createElement("td",null,"Addresses significant scalability and performance issues prevalent in traditional serverless architectures."),i.a.createElement("td",null,"Proposes an innovative new architecture specifically designed to enhance scalability and reduce latency for serverless applications."),i.a.createElement("td",null,"Primarily focuses on Function-as-a-Service (FaaS) while proposing improvements to current serverless designs."),i.a.createElement("td",null,"Utilizes performance benchmarks and simulation models to effectively demonstrate improvements offered by the new architecture."),i.a.createElement("td",null,"Specifically targeted at high-performance cloud applications requiring low-latency and high-throughput capabilities."))))))};const u=[{name:"Vivek",bio:"Masters degree in Computer Science from Saint Louis University",img:a(15),linkedin:"#"},{name:"Sowjanya",bio:"Masters degree in Computer Science from Saint Louis University",img:a(16),linkedin:"#"},{name:"Pravarsha",bio:"Masters degree in Computer Science from Saint Louis University",img:a(17),linkedin:"#"},{name:"Sowmya",bio:"Masters degree in Computer Science from Saint Louis University",img:a(18),linkedin:"#"},{name:"Sai Kumar",bio:"Masters degree in Computer Science from Saint Louis University",img:a(19),linkedin:"#"}];var d=function(){return i.a.createElement("section",{id:"team",className:"team-section"},i.a.createElement("h2",{className:"teamh2"},"Meet the Team"),i.a.createElement("div",{className:"team-grid"},u.map(e=>i.a.createElement("div",{key:e.name,className:"team-member"},i.a.createElement("img",{src:e.img,alt:e.name}),i.a.createElement("h3",null,e.name),i.a.createElement("p",{className:"team-description"},e.bio)))))};var p=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(r,null),i.a.createElement("section",{id:"home"},i.a.createElement(c,null)),i.a.createElement("section",{id:"content"},i.a.createElement(o,null)),i.a.createElement("section",{id:"taxonomy"},i.a.createElement(m,null)),i.a.createElement("section",{id:"team"},i.a.createElement(d,null)))};var h=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then(t=>{let{getCLS:a,getFID:n,getFCP:i,getLCP:s,getTTFB:l}=t;a(e),n(e),i(e),s(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,null))),h()}],[[4,1,2]]]);
//# sourceMappingURL=main.fafda311.chunk.js.map