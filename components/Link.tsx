import classNames from 'classnames';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {}

const Link: React.FC<Props> = ({ href, className, children, ...attributes }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <NextLink href={href} passHref>
      <a className={classNames(className, { active: isActive })} {...attributes}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
