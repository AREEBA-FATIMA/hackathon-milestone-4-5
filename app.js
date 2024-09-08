// Regular expressions for validation
const strRegex = /^[a-zA-Z\s]*$/; // Only letters and spaces
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Email
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; // Phone number
const digitRegex = /^\d+$/; // Digits only

const mainForm = document.getElementById('cv-form');

// Validation types
const validType = {
    TEXT: 'text',
    TEXT_EMP: 'text_emp',
    EMAIL: 'email',
    DIGIT: 'digit',
    PHONENO: 'phoneno',
    ANY: 'any',
};

// Form elements
const firstnameElem = mainForm.firstname;
const middlenameElem = mainForm.middlename;
const lastnameElem = mainForm.lastname;
const imageElem = mainForm.image;
const designationElem = mainForm.designation;
const addressElem = mainForm.address;
const emailElem = mainForm.email;
const phonenoElem = mainForm.phoneno;
const summaryElem = mainForm.summary;

// Display elements
const nameDsp = document.getElementById('fullname_dsp');
const imageDsp = document.getElementById('image_dsp');
const phonenoDsp = document.getElementById('phoneno_dsp');
const emailDsp = document.getElementById('email_dsp');
const addressDsp = document.getElementById('address_dsp');
const designationDsp = document.getElementById('designation_dsp');
const summaryDsp = document.getElementById('summary_dsp');
const projectsDsp = document.getElementById('projects_dsp');
const achievementsDsp = document.getElementById('achievements_dsp');
const skillsDsp = document.getElementById('skills_dsp');
const educationsDsp = document.getElementById('educations_dsp');
const experiencesDsp = document.getElementById('experiences_dsp');

// Fetch values from input elements
const fetchValues = (attrs, ...nodeLists) => {
    let tempDataArr = [];
    const elemsAttrsCount = attrs.length;
    const elemsDataCount = nodeLists[0].length;

    for (let i = 0; i < elemsDataCount; i++) {
        let dataObj = {};
        for (let j = 0; j < elemsAttrsCount; j++) {
            dataObj[attrs[j]] = nodeLists[j][i].value;
        }
        tempDataArr.push(dataObj);
    }

    return tempDataArr;
};

// Get user inputs and validate them
const getUserInputs = () => {
    // Define input elements
    const achievementsTitleElem = document.querySelectorAll('.achieve_title');
    const achievementsDescriptionElem = document.querySelectorAll('.achieve_description');
    const expTitleElem = document.querySelectorAll('.exp_title');
    const expOrganizationElem = document.querySelectorAll('.exp_organization');
    const expLocationElem = document.querySelectorAll('.exp_location');
    const expStartDateElem = document.querySelectorAll('.exp_start_date');
    const expEndDateElem = document.querySelectorAll('.exp_end_date');
    const expDescriptionElem = document.querySelectorAll('.exp_description');
    const eduSchoolElem = document.querySelectorAll('.edu_school');
    const eduDegreeElem = document.querySelectorAll('.edu_degree');
    const eduCityElem = document.querySelectorAll('.edu_city');
    const eduStartDateElem = document.querySelectorAll('.edu_start_date');
    const eduGraduationDateElem = document.querySelectorAll('.edu_graduation_date');
    const eduDescriptionElem = document.querySelectorAll('.edu_description');
    const projTitleElem = document.querySelectorAll('.proj_title');
    const projLinkElem = document.querySelectorAll('.proj_link');
    const projDescriptionElem = document.querySelectorAll('.proj_description');
    const skillElem = document.querySelectorAll('.skill');

    // Add event listeners for form validation
    firstnameElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'First Name'));
    middlenameElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT_EMP, 'Middle Name'));
    lastnameElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'Last Name'));
    phonenoElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.PHONENO, 'Phone Number'));
    emailElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.EMAIL, 'Email'));
    addressElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Address'));
    designationElem.addEventListener('keyup', (e) => validateFormData(e.target, validType.TEXT, 'Designation'));

    achievementsTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    achievementsDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    expTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    expOrganizationElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Organization')));
    expLocationElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, "Location")));
    expStartDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.ANY, 'Start Date')));
    expEndDateElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'End Date')));
    expDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    eduSchoolElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'School')));
    eduDegreeElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Degree')));
    eduCityElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'City')));
    eduStartDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.ANY, 'Start Date')));
    eduGraduationDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target, validType.ANY, 'Graduation Date')));
    eduDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    projTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Title')));
    projLinkElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Link')));
    projDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Description')));
    skillElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target, validType.ANY, 'Skill')));

    return {
        firstname: firstnameElem.value,
        middlename: middlenameElem.value,
        lastname: lastnameElem.value,
        designation: designationElem.value,
        address: addressElem.value,
        email: emailElem.value,
        phoneno: phonenoElem.value,
        summary: summaryElem.value,
        achievements: fetchValues(['achieve_title', 'achieve_description'], achievementsTitleElem, achievementsDescriptionElem),
        experiences: fetchValues(['exp_title', 'exp_organization', 'exp_location', 'exp_start_date', 'exp_end_date', 'exp_description'], expTitleElem, expOrganizationElem, expLocationElem, expStartDateElem, expEndDateElem, expDescriptionElem),
        educations: fetchValues(['edu_school', 'edu_degree', 'edu_city', 'edu_start_date', 'edu_graduation_date', 'edu_description'], eduSchoolElem, eduDegreeElem, eduCityElem, eduStartDateElem, eduGraduationDateElem, eduDescriptionElem),
        projects: fetchValues(['proj_title', 'proj_link', 'proj_description'], projTitleElem, projLinkElem, projDescriptionElem),
        skills: fetchValues(['skill'], skillElem)
    };
};

// Validate form data based on type
function validateFormData(elem, elemType, elemName) {
    if (elemType === validType.TEXT && (!strRegex.test(elem.value) || elem.value.trim().length === 0)) {
        addErrMsg(elem, elemName);
    } else if (elemType === validType.TEXT_EMP && !strRegex.test(elem.value)) {
        addErrMsg(elem, elemName);
    } else if (elemType === validType.EMAIL && (!emailRegex.test(elem.value) || elem.value.trim().length === 0)) {
        addErrMsg(elem, elemName);
    } else if (elemType === validType.PHONENO && (!phoneRegex.test(elem.value) || elem.value.trim().length === 0)) {
        addErrMsg(elem, elemName);
    } else if (elemType === validType.ANY && elem.value.trim().length === 0) {
        addErrMsg(elem, elemName);
    } else {
        removeErrMsg(elem);
    }
}

// Add error message to the element
function addErrMsg(formElem, formElemName) {
    formElem.nextElementSibling.innerHTML = `${formElemName} is invalid`;
}

// Remove error message from the element
function removeErrMsg(formElem) {
    formElem.nextElementSibling.innerHTML = "";
}

// Show data in the preview section
const showListData = (listData, listContainer) => {
    listContainer.innerHTML = "";
    listData.forEach(listItem => {
        let itemElem = document.createElement('div');
        itemElem.classList.add('preview-item');
        
        for (const key in listItem) {
            let subItemElem = document.createElement('span');
            subItemElem.classList.add('preview-item-val');
            subItemElem.innerHTML = `${listItem[key]}`;
            itemElem.appendChild(subItemElem);
        }

        listContainer.appendChild(itemElem);
    });
};

// Display CV data
const displayCV = (userData) => {
    nameDsp.innerHTML = `${userData.firstname} ${userData.middlename} ${userData.lastname}`;
    phonenoDsp.innerHTML = userData.phoneno;
    emailDsp.innerHTML = userData.email;
    addressDsp.innerHTML = userData.address;
    designationDsp.innerHTML = userData.designation;
    summaryDsp.innerHTML = userData.summary;
    showListData(userData.projects, projectsDsp);
    showListData(userData.achievements, achievementsDsp);
    showListData(userData.skills, skillsDsp);
    showListData(userData.educations, educationsDsp);
    showListData(userData.experiences, experiencesDsp);
};

// Generate CV and display it
const generateCV = () => {
    const userData = getUserInputs();
    displayCV(userData);
    console.log(userData);
};

// Preview uploaded image
function previewImage() {
    const oFReader = new FileReader();
    oFReader.readAsDataURL(imageElem.files[0]);
    oFReader.onload = function (ofEvent) {
        imageDsp.src = ofEvent.target.result;
    };
}

// Print CV
function printCV() {
    window.print();
}
