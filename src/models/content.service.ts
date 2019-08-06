import { Injectable } from '@angular/core';
import { ExperienceItem, SkillItem } from './models';

@Injectable({
    providedIn: 'root',
})
export class ContentService {

    constructor() { }

    getProfessionalInfo(): string {
        return require('./professional-info.html')
    }

    getSkillItems(): SkillItem[] {
        return [
            new SkillItem('Backend Development', 'frontend', 8, require('./backend.skill-item.html')),
            new SkillItem('Frontend Development', 'backend', 7, require('./frontend.skill-item.html')),
            new SkillItem('DevOps', 'devops', 6, require('./devops.skill-item.html')),
            new SkillItem('Soft Skills', 'soft', 999, require('./soft.skill-item.html')),
        ]
    }

    getExperienceItems(): ExperienceItem[] {
        return [
            new ExperienceItem('Apr 2018', 'present', 'Fullstack Python Developer', 'System Research Center "Integro"',
                require('./integro2018.experience-item.html'), ['Python', 'Django', 'Celery', 'PostgreSQL', 'Typescript', 'Gitlab CI']),
            new ExperienceItem('Dec 2015', 'Apr 2018', 'Fullstack .NET Developer', 'System Research Center "Integro"',
                require('./integro2015.experience-item.html'), ['C#', '.NET', 'MongoDB', 'AngularJS']),
            new ExperienceItem('Aug 2015', 'Nov 2015', 'Fullstack Developer', '1Blocker',
                require('./blocker2015.experience-item.html'), ['Node.JS', 'ExpressJS', 'AngularJS', 'Bootstrap']),
            new ExperienceItem('May 2015', 'May 2015', 'Web Developer (internship)', 'Uralsib Bank',
                require('./uralsib2015.experience-item.html'), ['jQuery', 'HTML', 'CSS', 'JS']),
            new ExperienceItem('Jul 2014', 'Oct 2014', 'Web Developer', 'System Research Center "Integro"',
                require('./integro2014.experience-item.html'), ['ASP.NET', 'AngularJS']),
            new ExperienceItem('Jun 2014', 'Jun 2014', 'Web Developer (internship)', 'System Research Center "Integro"',
                require('./integro2014internship.experience-item.html'), ['ASP.NET', 'KnockoutJS']),
            new ExperienceItem('Jul 2013', 'Sep 2013', 'Web Developer', 'UfaPR',
                require('./ufapr2013.experience-item.html'), ['PHP', 'JS', 'jQuery']),
        ]
    }

}
