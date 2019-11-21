/// <reference types="react" />
import * as icons from './svg';
declare type IconType = keyof typeof icons;
export declare const iconTypes: IconType[];
export declare type IconProps = {
    /** 사용 할 아이콘 타입 */
    icon: IconType;
    /** 아이콘 색상 */
    color?: string;
    /** 아이콘 크기 */
    size?: string | number;
    className?: string;
};
/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `width`로 크기를 설정하세요.
 */
declare const Icon: ({ icon, color, size, className }: IconProps) => JSX.Element;
export default Icon;
