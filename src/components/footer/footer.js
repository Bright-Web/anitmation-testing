import React from 'react';
import cn from 'classnames';
import style from './footer.mod.scss';
import Container from '../layout/container/container';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  const classes = cn(style.footer);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          siteLang
        }
      }
    }
  `);

  const isNZ = data.site.siteMetadata.siteLang === 'NZ';

  return (
    <>
      <div className={classes}>
        <Container size="xl" gutters>
          <div className={style.footer__content}>
            <h3>
              Need a hand?
              <br />
              Don't hesitate to get in touch with our team.
            </h3>
            <div className={style.footer__contact}>
              <a
                className={style.footer__phone}
                href={`tel:${isNZ ? '64 3 3419 456' : '08 9460 0303'}`}
              >
                Phone:<span>{isNZ ? '64 3 3419 456' : '08 9460 0303'}</span>
              </a>
              <p>
                Email:
                <span>
                  <a
                    href={`mailto:${
                      isNZ
                        ? 'hello@rhubarblane.co.nz'
                        : 'hello@rhubarblane.com.au'
                    }`}
                  >
                    {isNZ
                      ? 'hello@rhubarblane.co.nz'
                      : 'hello@rhubarblane.com.au'}
                  </a>
                </span>
              </p>
              {!isNZ && (
                <p>
                  Address:
                  <span>
                    Commonwealth Bank Building Level 2, 242 Murray Street Perth
                    WA 6000
                  </span>
                </p>
              )}
            </div>
          </div>
        </Container>
      </div>
      <div className={style.footer__bar}>
        <Container size="xl" gutters>
          <div className={style.footer__credit}>
            <span>
              Copyright © 2023. <br />
              Rhubarb Lane is part of the{' '}
              <a href="https://attivogroup.co/">Attivo Group.</a>
            </span>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
