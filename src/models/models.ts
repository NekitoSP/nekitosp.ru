export class ExperienceItem {
    constructor(
        public from: string,
        public to: string,
        public position: string,
        public employer: string,
        public content: string,
        public skills: string[]) { }
}

export class SkillItem {
    constructor(
        public title: string,
        public colorClass: string,
        public value: number,
        public content: string) { }

    get percentage(): number {
        return (this.value / this.maxValue) * 100;
    }

    get restPercentage(): number {
        return ((this.maxValue - this.value) / this.maxValue) * 100;
    }
    get valueStr(): string {
        return `${this.value}/${this.maxValue}`;
    }

    get maxValue() {
        return 10;
    }
}

export class ProjectItem {
    constructor(
        public title: string,
        public year: string,
        public content: string,
        public imagePath: string,
        public skills: string[]) { }
}
