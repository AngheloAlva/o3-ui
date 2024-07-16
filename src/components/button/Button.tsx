import { cva, type VariantProps } from "class-variance-authority"
import type { ButtonHTMLAttributes } from "react"

const buttonVariants = cva(
	"rounded-md transition-all focus:outline-none focus:ring-offset-background focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-95 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60",
	{
		variants: {
			variant: {
				default: "text-background bg-primary hover:brightness-90",
				secondary: "text-background bg-secondary hover:brightness-90 focus:ring-secondary",
				accent: "text-background bg-accent hover:brightness-90 focus:ring-accent",
				outline:
					"text-primary bg-transparent border border-primary hover:bg-primary hover:text-background",
				ghost: "text-primary bg-background hover:bg-primary hover:text-background",
				link: "text-primary bg-background hover:underline",
			},
			size: {
				default: "px-4 py-2",
				sm: "px-3 text-xs py-1.5",
				lg: "py-2.5 px-6",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
)

interface ButtonProps
	extends VariantProps<typeof buttonVariants>,
		ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
}

function Button({ size, variant, children, ...props }: ButtonProps): React.ReactElement {
	return (
		<button className={buttonVariants({ size, variant })} {...props}>
			{children}
		</button>
	)
}

export { Button }
