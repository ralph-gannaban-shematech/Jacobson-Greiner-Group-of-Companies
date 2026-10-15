export interface CareerJob {
  id: string;
  title: string;
  companyId: string;
  companyName: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Seasonal' | 'Apprenticeship';
  experienceLevel: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}

export const CAREER_LISTINGS: CareerJob[] = [
  {
    id: 'job-1',
    title: 'Senior Project Manager – Commercial',
    companyId: 'jacobson-commercial',
    companyName: 'Jacobson Commercial',
    department: 'General Contracting',
    location: 'Brandon, MB',
    type: 'Full-time',
    experienceLevel: '5+ Years Experience',
    summary: 'Lead multimillion-dollar commercial, institutional, and industrial build projects from tender to final handover.',
    responsibilities: [
      'Manage project budgets, schedules, sub-trades, and consultant communications',
      'Oversee site safety compliance, quality assurance, and municipal permit inspections',
      'Provide regular reporting to clients and executive project directors'
    ],
    qualifications: [
      'Degree in Civil Engineering, Construction Management, or Gold Seal Certification',
      'Minimum 5 years of commercial construction project leadership',
      'Valid Manitoba Driver’s License and clean driving abstract'
    ]
  },
  {
    id: 'job-2',
    title: 'Journeyman / Red Seal Carpenter',
    companyId: 'jng-homes',
    companyName: 'J&G Homes',
    department: 'Residential Construction',
    location: 'Brandon & Westman Area, MB',
    type: 'Full-time',
    experienceLevel: 'Red Seal / Experienced Apprentice',
    summary: 'Perform framing, exterior envelope, and fine architectural woodwork on custom single-family residences.',
    responsibilities: [
      'Read architectural framing and structural elevation blueprints with high precision',
      'Install subfloors, walls, trusses, engineered beams, and exterior weather barriers',
      'Mentor apprentice carpenters and maintain pristine job-site safety standards'
    ],
    qualifications: [
      'Red Seal Carpentry endorsement or 4th-year apprenticeship standing',
      'Knowledge of Manitoba Building Code and residential building science',
      'Own hand tools and dependable transportation'
    ]
  },
  {
    id: 'job-3',
    title: 'Heavy Equipment Operator (Excavator / Grader)',
    companyId: 'allen-and-bolack',
    companyName: 'Allen & Bolack Excavating',
    department: 'Civil Infrastructure',
    location: 'Brandon, MB',
    type: 'Full-time',
    experienceLevel: '3+ Years Experience',
    summary: 'Operate modern GPS-equipped CAT & Volvo excavators on municipal sewer/water installations and mass earthwork.',
    responsibilities: [
      'Operate heavy excavators for utility trenching, pipe laying, and pad grading',
      'Perform daily pre-trip mechanical inspections, fluid checks, and equipment maintenance',
      'Coordinate seamlessly with ground pipe-layers and laser surveyor crews'
    ],
    qualifications: [
      '3+ years experience operating 20-35 ton excavators in utility excavation',
      'Familiarity with Trimble or Topcon 3D GPS machine control systems preferred',
      'Valid Class 3 or Class 1 driver’s license an asset'
    ]
  },
  {
    id: 'job-4',
    title: 'Concrete Ready-Mix Mixer Driver',
    companyId: 'western-concrete',
    companyName: 'Western Concrete',
    department: 'Logistics & Supply',
    location: 'Brandon, MB',
    type: 'Full-time',
    experienceLevel: 'Class 3 with Air',
    summary: 'Deliver ready-mix concrete formulations safely to commercial, residential, and agricultural job sites throughout the Westman region.',
    responsibilities: [
      'Operate ready-mix delivery trucks safely across highway and uneven construction site terrain',
      'Inspect slump, slump additives, and discharge chutes to client specifications',
      'Wash down equipment after pours in accordance with environmental regulations'
    ],
    qualifications: [
      'Valid Manitoba Class 3 or Class 1 Driver’s License with Air Endorsement',
      'Clean commercial driving abstract',
      'Customer-first professional demeanor on job sites'
    ]
  },
  {
    id: 'job-5',
    title: 'Arena Operations & Ice Technician',
    companyId: 'jng-homes-arena',
    companyName: 'J&G Homes Arena',
    department: 'Recreation & Facilities',
    location: 'Brandon, MB',
    type: 'Full-time',
    experienceLevel: 'Entry / Experienced',
    summary: 'Maintain premier ice conditions, operate Zamboni resurfacers, and ensure safe facility operation for youth & junior hockey teams.',
    responsibilities: [
      'Operate ice resurfacing machinery, edgers, and water treatment systems',
      'Conduct daily ice depth measurements and refrigeration plant checks',
      'Assist facility patrons, youth tournament organizers, and community clubs'
    ],
    qualifications: [
      'Arena Operations Certification (ORFA or Manitoba equivalent) preferred',
      'Mechanical aptitude and comfort working flexible evening/weekend shifts',
      'Strong team attitude and passion for community sport'
    ]
  }
];
