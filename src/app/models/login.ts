export class Login {
    email: string;
    password: string;
    user_type: string;
}
export class AddDestination {
    id: string;
    destination_name: string;
    country_name: string;
    city_name: string;
    des: string;
    state_name: string;
}
export class School {
    id: string;
    school_name: string;
    school_contact_name: string;
    email: string;
    mobile: string;
    address: string;
    vi_hours: string;
    vi_hours_to: string;
    vi_hours_from: string;
    school_des_name: string;
    school_country: string;
    school_state: string;
    school_city: string;
    school_pincode: string;
}
export class Student2 {
    name: string;
    mobile: string;
    email: string;
    dob: string;
    class: string;
    registrationno: string;
    passport: string;
    journey_dest: string;
    parents: Array<any>;
    aboutme: string;
    password: string;
    profile_pic: string;
    address: string;
    country: string;
    city: string;
    postalcode: string;
}

export class Worksheet {
    id: string;
    worksheet_category: string;
    worksheet_title: string;
    worksheet_time: string;
    worksheetlogo: string;
    skills: Array<any>;
    points: string;
    introvideo: string;
    banner: Array<any>;
    description: string;
    short_des: string;
    tags: Array<any>;
    step1: object;
    step2: object;
    step3: Array<any>;
    step4: object;
    step5: object;
    step6: Array<any>;
    content_type: Array<any>;
    content_rate: string;
    approve_type: string;
    send_email: string;
}
export class Worksheet2 {
    worksheet_created_by: string;
    creater_name: string;
    worksheetlogo: string;
    worksheet_title: string;
    description: string;
    worksheet_time: string;
    short_des: string;
    skills: Array<any>;
    points: string;
    createdAt: string;
    introvideo: string;
    q_a: Array<any>;
    embed_video: EmbedVideo;
}
export class EmbedVideo {
    instruction: string;
    video_type: string;
    link: string;
}
export class step1 {
    instruction: string;
    youtubeurl: string;
}

export class step2 {
    files: Array<any>;
    text: string;
}

export class step3 {
    text: string;
    question: Array<any>;
}

export class step4 {
    link: string;
    text: string;
}

export class step5 {
    link: string;
    text: string;
    radio: string;
}

export class course {
    course_title: string;
    description: string;
    courselogo: string;
    tags: Array<any>;
    worksheet: Array<any>
}

export class Geography {
    country: string;
    state: string;
    pincode: string;
}
export class Qa {
    _id: string;
    question: string;
    hint: string;
    type: string;
    subject_skill: Array<any>;
    level: string;
    point: string;
    time: string;
    question_type: string;
    option: Array<questionOption>;
    correct_option: string;
}
export class questionOption {
    option: string;
    response: string;
    iscorrect: boolean;
}
export class Subject {
    name: string;
    description: string;
    image: string;
}
export class Skill {
    name: string;
    subject_id: string;
    description: string;
    image: string;
}

export class Continent {
    name: string;
    description: string;
    image: string;
}
export class Country {
    name: string;
    description: string;
    image: string;
    continent_id: string;
}
export class City {
    name: string;
    description: string;
    image: string;
    continent_id: string;
    country_id: string;
    zone_id: string;
}
export class Zone {
    name: string;
    description: string;
    image: string;
    continent_id: string;
    country_id: string;
}
export class Teacher {
    school_id: string;
    unique_teacher_id: string;
    image: string;
    name: string;
    email: string;
    mobile: string;
    password: string;
    aadhar_card: string;
    passport_no: string;
}
export class Student {
    school_id: string;
    image: string;
    unique_student_id: string;
    name: string;
    email: string;
    mobile: string;
    password: string;
    aadhar_card: string;
    passport_no: string;
}
export class JM {
    image: string;
    unique_jm_id: string;
    name: string;
    email: string;
    mobile: string;
    aadhar_card: string;
    password: string;
    passport_no: string;
}

export class JourneyPlaner {
    _id:string;
    journey_id: string;
    school_id: string;
    journey_start: Date;
    journey_end: Date;
}
export class DiscoverSheet {
    _id:string;
    name: string;
    worksheet_id: string;
    
}
export class Editor {
    id: string;
    image: string;
    unique_Editor_id: string;
    name: string;
    email: string;
    mobile: string;
    aadhar_card: string;
    password: string;
    passport_no: string;
}
export class Yap {
    _id: string;
    name: string;
    project_type: string;
    location_id: string;
}
export class Bb {
    _id: string;
    name: string;
    project_type: string;
    location_id: string;
}
export class Tt {
    _id: string;
    name: string;
    project_type: string;
    location_id: string;
}
export class Tjp {
    _id: string;
    name: string;
    project_type: string;
    location_id: string;
}
export class Category {
    _id: string;
    name: string;
    description: string;
}
export class FaqCategory {
    _id: string;
    name: string;
    description: string;
}
export class FaqQa {
    _id: string;
    category_id: string;
    question: string;
    answer: string;
}
export class Journey {
    _id: string;
    name: string;
    image: string;
    Worksheet_id: Array<any>;
    skill_id: Array<any>;
    yap_id: Array<any>;
    bb_id: Array<any>;
    tt_id: Array<any>;
    tjp_id: Array<any>;
    location: Array<any>;
}
export class Certificate {
    _id: string;
    name: string;
    image: string;
    description: string;
    skill_factory: Array<any>;
    
}
export class BadgeDiscoverySheet {
    _id: string;
    name: string;
    dscount:number;
    score:number;
    star:number;
    hint:Boolean;
    image: string;
    date:Date;
}
export class BadgeSkillFactory {
    _id: string;
    name: string;
    star:number;
    skillCount:number;
    course:Array<any>;
    courseCount: number;
    totalVideo: number;
    image: string;
    date: Date;
}
export class BadgeMediaProject {
    _id: string;
    name: string;
    date: Date;
    submitStatus: Boolean;
    image: string;
    approvalStatus: Boolean;
}
export class BadgeProfile {
    _id: string;
    name: string;
    image: string;
    badgedStatus: Boolean;
}
export class BadgeTuckShop {
    _id: string;
    image: string;
    name: string;
    score: number;
}
export class BadgeFaq {
    _id: string;
    openState: string;
    image: string;
    score: number;
}
export class BadgeJourneyReadiness {
    _id: string;
    name: string;
    point: number;
    image: string;
    date: Date;
    score: number;
    recallGeneratorStatus: number;
}
export class BadgeFeedbackForms{
    _id: string;
    name: string;
    image: string;
}