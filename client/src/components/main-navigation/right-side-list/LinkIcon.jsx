import {NavLinkIcon} from '../helperFn/navLinkIcon';

function LinkIcon(props) {
    const {iconType} = props;
    
  return (
    <i className="lg:text-gray-300 text-gray-500 text-lg leading-lg">
        <NavLinkIcon iconType={iconType} />
    </i>
  )
}

export {LinkIcon}