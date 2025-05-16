declare module '@p5-wrapper/react' {
    import { ComponentType } from 'react';
    
    export interface ReactP5WrapperProps {
        sketch: (p5: any) => void;
    }
    
    export const ReactP5Wrapper: ComponentType<ReactP5WrapperProps>;
} 