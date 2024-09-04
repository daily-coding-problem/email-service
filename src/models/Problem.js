export class Problem {
	title;
	link;
	content;
	solution;

	constructor(
		title,
		link,
		content,
		solution= ''
	) {
		this.title = title;
		this.link = link;
		this.content = content;
		this.solution = solution;
	}
}
