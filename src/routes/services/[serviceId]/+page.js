// import { error } from "@sveltejs/kit";
//  const services = [
//     {
//         id: 1,
//          title: 'Landscaping',
//          definitonTitle: 'What is Landscaping?',
//          imageUrl: '/home/lawn01.jpg',
//          definition: 'Landscaping requires a certain understanding of horticulture and artistic design, but is not limited to plants and horticulture. Sculpting land to enhance usability (patio, walkways, ponds, water features) are also examples of landscaping being used. When intended as purely an aesthetic change, the term Ornamental Landscaping is used.',
//          purposeTitle: '',
//          purposeDesc: '',
//          blockOneTitle: '',
//          blockOneTexts: [],
//     }
// ]
// export const load = ({ params }) => {
//     const id = params.serviceId;
    
//     const service = services.find(s => s.id == id)
    
//     if (service) {
//         return {
//             service
//         }
//     } else {
//         throw error(404, 'Not found.')
//     }
// }
