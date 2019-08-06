import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/models/content.service';
import { ExperienceItem, SkillItem } from 'src/models/models';

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    experience: ExperienceItem[] = [];
    skills: SkillItem[] = [];
    professionalInfo: string;

    constructor(private contentService: ContentService) { }

    ngOnInit(): void {
        this.experience = this.contentService.getExperienceItems();
        this.skills = this.contentService.getSkillItems();
        this.professionalInfo = this.contentService.getProfessionalInfo();
    }

    getClass(skill: SkillItem): string {
        return `skill-item__progress-bar-${skill.colorClass}`;
    }
}
