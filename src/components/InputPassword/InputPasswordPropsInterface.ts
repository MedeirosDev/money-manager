export default interface InputPasswordPropsInterface {
	label: string,
	name: string,
	id?: string,
	required?: boolean,
	onChange?: { (): void },
}