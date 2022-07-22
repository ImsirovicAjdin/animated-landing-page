

function ListItemLink(props) {
    const {iconType, linkText} = props;
    const icons = ['facebook', 'twitter', 'github'];
  return (
    <a href="#" className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
        <LinkIcon iconType={iconType} iconStyle={iconStyle} />
        <span className="lg:hidden inline-block ml-2">{linkText}</span>
    </a>
  )
}

export {ListItemLink}