/* ════════════════════════════════════════
   LEAD ALLOCATION DASHBOARD — data.js
   Seed data + shared constants
   ════════════════════════════════════════ */

const COLORS = [
  '#3b82f6','#06b6d4','#8b5cf6','#10b981',
  '#f59e0b','#ef4444','#f472b6','#a3e635','#fb923c','#e879f9'
];

let leads = [
  { id:1,  date:"9-Jan-26",  time:"11:30 IST", name:"Partha",               email:"parthasaradhi.doo@hcl.com",               country:"India",         course:"Architectural Modelling with BIM Management Essentials",                          csmEmail:"tamanna.alisha@koenig-solutions.com",  csm:"Tamanna Alisha",        trainer:"Kowsik Rattala",     query:"",                                                                     status:"" },
  { id:2,  date:"8-Jan-26",  time:"23:30 IST", name:"Wessly Hernandez",     email:"wesslyhernandez06@gmail.com",              country:"United States",  course:"Autodesk Civil 3D Essentials",                                                     csmEmail:"eddie.gonzalez@koenig-solutions.com",  csm:"Eddie Gonzalez",        trainer:"Dinesh Tiwari",      query:"FMAT @ Los Angeles for 12 Participants",                                status:"Closed" },
  { id:3,  date:"14-Jan-26", time:"20:30 IST", name:"Dan Florea",           email:"floreald@gmail.com",                       country:"Romania",        course:"Autodesk Advance Steel",                                                           csmEmail:"daniel.nimmo@koenig-solutions.com",    csm:"Daniel Nimmo",          trainer:"Divya G",            query:"",                                                                     status:"" },
  { id:4,  date:"15-Jan-26", time:"17:30 IST", name:"MALUSI MTHEMBU",       email:"makusi@proplama.co.za",                    country:"South Africa",   course:"Autodesk Professional in BIM Management for Building Design",                      csmEmail:"Maitri.Bhansali@koenig-solutions.com", csm:"Maitri Bhansali",       trainer:"Kowsik Rattala",     query:"",                                                                     status:"" },
  { id:5,  date:"20-Jan-26", time:"14:00 IST", name:"Najam Amir",           email:"najam.amir@jamicpmpharma.com",             country:"Saudi Arabia",   course:"Autodesk Fusion 360",                                                              csmEmail:"Shiv.Sompati@koenig-solutions.com",    csm:"Shiv Sompati",          trainer:"Aditi Mishra",       query:"",                                                                     status:"" },
  { id:6,  date:"23-Jan-26", time:"21:45 IST", name:"Banze Lamine Joachim", email:"joachimlamine@gmail.com",                  country:"South Africa",   course:"Autodesk Professional in AutoCAD for Design and Drafting",                         csmEmail:"ratan.priya@koenig-solutions.com",     csm:"Ratan Priya",           trainer:"Dinesh Tiwari",      query:"",                                                                     status:"" },
  { id:7,  date:"28-Jan-26", time:"14:30 IST", name:"Mark",                 email:"Markolder@marlerfabrications.co.uk",       country:"UK",             course:"Building Information Modeling (BIM) Concepts & Revit Architecture",               csmEmail:"tarun.dwivedi@koenig-solutions.com",   csm:"Tarun Dwivedi",         trainer:"Kowsik Rattala",     query:"",                                                                     status:"" },
  { id:8,  date:"29-Jan-26", time:"13:00 IST", name:"Mohamed Ibrahim Habib",email:"miglebid@gmail.com",                       country:"Sudan",          course:"AVEVA E3D/BIM",                                                                    csmEmail:"mohsm.afzal@koenig-solutions.com",     csm:"Mohsm Afzal Bhat",      trainer:"Kowsik Rattala",     query:"",                                                                     status:"" },
  { id:9,  date:"2-Feb-26",  time:"08:30 IST", name:"Josh Crawley",         email:"jcrawley@hq.eu",                           country:"Australia",      course:"Autodesk AutoCAD & Civil 3D Essentials for Survey, Surface & Roadway Design",     csmEmail:"danish.mahajan@koenig-solutions.com",  csm:"Danish Mahajan",        trainer:"Dinesh Tiwari",      query:"",                                                                     status:"" },
  { id:10, date:"30-Jan-26", time:"15:00 IST", name:"Shrikant Tirthe",      email:"shrikant.tirthe@optima-packaging.com",     country:"India",          course:"AVEVA E3D",                                                                        csmEmail:"sarthak.panwar@koenig-solutions.com",  csm:"Sarthak Panwar",        trainer:"Kowsik Rattala",     query:"",                                                                     status:"" },
  { id:11, date:"21-Jan-26", time:"12:30 IST", name:"Naranbilge Idesh",     email:"sarreuy@secrets.mn",                       country:"Mongolia",       course:"Creo Parametric: Advanced modelling & simulation",                                 csmEmail:"emily@koenig-solutions.com",           csm:"Emily",                 trainer:"Aditi Mishra",       query:"",                                                                     status:"Converted (SC: 386545)" },
  { id:12, date:"3-Feb-26",  time:"08:30 IST", name:"Aaron Reyne",          email:"aaron.reyne@nwessiedwater.com.au",         country:"Australia",      course:"Autodesk Inventor Essentials",                                                     csmEmail:"Danish.Mahajan@koenig-solutions.com",  csm:"Danish Mahajan",        trainer:"Aditi Mishra",       query:"",                                                                     status:"" },
  { id:13, date:"5-Feb-26",  time:"12:30 IST", name:"Zipho Sithole",        email:"zsithole999@gmail.com",                    country:"South Africa",   course:"Maintenance Engineering & Predictive Maintenance",                                 csmEmail:"Tarun.Dwivedi@koenig-solutions.com",   csm:"Tarun Dwivedi",         trainer:"Aditi Mishra",       query:"",                                                                     status:"" },
  { id:14, date:"9-Feb-26",  time:"20:30 IST", name:"William A Oliver",     email:"william.oliver@usmi.ml",                   country:"United States",  course:"Autodesk Inventor CAM (under customization)",                                      csmEmail:"Eddie.Gonzalez@koenig-solutions.com",  csm:"Eddie Gonzalez",        trainer:"Aditi Mishra",       query:"",                                                                     status:"" },
  { id:15, date:"11-Feb-26", time:"11:00 IST", name:"ManojPatil",           email:"manoj.patil05@infosys.com",                country:"India",          course:"Autodesk Fusion Manage",                                                           csmEmail:"Rahul.Jarastia@koenig-solutions.com",  csm:"Rahul Jasratia",        trainer:"Kowsik Rattala",     query:"",                                                                     status:"" },
  { id:16, date:"13-Feb-26", time:"17:00 IST", name:"Kaushik Gajjar",       email:"kaushik.gajjar@derivaycollectors.com",     country:"India",          course:"Autodesk Advance Steel",                                                           csmEmail:"JKD.Avinakashi@koenig-solutions.com",  csm:"JKD Avinakshi",         trainer:"Kowsik Rattala",     query:"",                                                                     status:"Converted (SC: 252209)" },
  { id:17, date:"18-Feb-26", time:"11:00 IST", name:"Sin Nur Sahdah",       email:"nur.sahdah@threeriviesdesigngroup.com",    country:"Malaysia",       course:"Mastering Rhino 3D: From Basics to Advanced Design",                               csmEmail:"Vinay.Narayanan@koenig-solutions.com", csm:"Vinay Narayanan",       trainer:"Kowsik Rattala",     query:"Suggested: Computational Design & Advanced Surfacing with Rhino",      status:"" },
  { id:18, date:"18-Feb-26", time:"17:00 IST", name:"Dom Calafiore",        email:"domcalafiore@gmail.com",                   country:"Australia",      course:"BIM Concepts & Revit Architecture",                                                csmEmail:"Brad.Walters@koenig-solutions.com",    csm:"Brad Christopher Walters", trainer:"Kowsik Rattala",  query:"Suggested: Scan-to-BIM & Digital Twin Workflow for Surveyors",         status:"" },
  { id:19, date:"18-Feb-26", time:"16:30 IST", name:"engtwa",               email:"engtwahassantongo6@gmail.com",             country:"Qatar",          course:"BIM Concepts & Revit Architecture",                                                csmEmail:"Ali.Abdou@koenig-solutions.com",       csm:"Ali Abdou",             trainer:"Kowsik Rattala",     query:"Suggested: BIM Management with Revit – Integrated BIM & Digital Delivery", status:"" },
  { id:20, date:"24-Feb-26", time:"12:00 IST", name:"Omkar",                email:"kamasaliomkar@gmail.com",                  country:"India",          course:"Tekla Structure Essentials Training",                                               csmEmail:"Abhishek.B@koenig-solutions.com",      csm:"Abhishek B",            trainer:"Sushil Vishwakarma", query:"",                                                                     status:"" },
];

let nextId = 21;

/** Returns status type string for a lead */
function getStatusType(s) {
  if (!s || s.trim() === '') return 'empty';
  if (s === 'Closed') return 'closed';
  if (s.toLowerCase().includes('converted')) return 'converted';
  return 'pending';
}

/** Count occurrences of a key across leads array */
function countBy(arr, key) {
  return arr.reduce((acc, l) => {
    const v = l[key] || 'Unknown';
    acc[v] = (acc[v] || 0) + 1;
    return acc;
  }, {});
}
