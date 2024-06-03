import { PropsWithChildren } from "react";

export type CourseGoalProps = PropsWithChildren<{title: string, onDelete: (id: number) => void, id: number}>;