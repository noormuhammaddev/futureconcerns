import React from 'react';
import Link from 'next/link';
import Sidebar from '../ServicesInnerDetail/Sidebar';

const NewInSwedenDetail = () => {
    return (
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="services-details-image">
                            <img src="/img/services/services-details1.jpg" alt="image" />
                        </div>

                        <div className="services-details-desc">
                            <span className="sub-title">Social Security Nummber</span>
                            <h3>Personnummer</h3>
                            <p>If you are new in Sweden then the first thing you must to do is to register yourself with swedish tax authority ‘Skatteverket’ to get your social security number also called as personal identity number or personnummer. As an EU/EEA-citizen you are entitled to live, work and study in Sweden with or without a personnummer.</p>
                            <p>It is a 12-digit number issued by Skatteverket to the persons registered in Sweden when they are convinced that you can support yourself and your family during the first year of your stay.</p>
                            <p>Personnummer is not only required to be a part of the social security and health care systems in Sweden, which is otherwise quite expensive to arrange through private insurance companies, but is often used as identification proof at all government offices, banks, insurances, subscriptions, collection of postal items at the post office etc.</p>

                            <br />
                            <span className="sub-title">Take</span>
                            <h3>All These Into Consideration</h3>
                            <div className="content">
                                <h3>Important Facts</h3>
                                <ul>
                                    <li>Employment contract(s),</li>
                                    <li>Proof of savings ex. Bank statement.</li>
                                    <li>Number of members in the family</li>
                                    <li>Place of residence(must be in Sweden). You can NOT apply for a personnummer while still living abroad. Neither is a holiday address enough. You must have a residential address in Sweden.</li>
                                    <li>You need to go in person (all the persons in the family) to an office of Skatteverket to apply for a personnummer.</li>
                                    <li>A legal ID-certificate, preferably a passport for every person applying.</li>
                                </ul>
                            </div>

                            <br />
                            <span className="sub-title">identification</span>
                            <h3>Swedish ID Card</h3>
                            <p>
                                Once you have received your Social Security number, you need to book an appointment with Swedish tax authority-Skatteverket to apply for a Swedish ID card.
                            </p>

                            <p>
                                Anyone who is at least 13 years old and registered for population purposes in Sweden may apply to the Swedish Tax Agency for Swedish ID card. You must be able to identify yourself, in other words prove who you are, with approved ID documentation or via an attester.
                            </p>

                            <br />
                            <span className="sub-title">Opening of A</span>
                            <h3>Bank Account</h3>
                            <h5>General requirements:</h5>
                            <p>In order to open a bank account, you must always be able to identify yourself.</p>

                            <div className="content">
                                <ul>
                                    <li>You can identify yourself with a valid Swedish identification document, such as a passport, a national identity card or a BankID. You can also identify yourself with a Swedish driving license.</li>
                                    <li>If you do not have Swedish identification documents, you can identify yourself with a valid foreign passport or other photo identification document that clearly shows your citizenship and is issued by an authority or some other authorised issuer. Note that the bank may request that you also present other documents.</li>
                                    <li>If you do not have any valid identity documents, you must be able to prove who you are and your citizenship by means of other documents issued by a competent authority.</li>
                                </ul>
                            </div>


                            {/*  */}
                            <span className="sub-title">Student</span>
                            <h3>Bank Account</h3>
                            <h5>Specific requirements:</h5>
                            <p>If you are a foreign student and willing to open a bank account, you must also be able to identify yourself like all others. In addition, you need</p>

                            <div className="content">
                                <ul>
                                    <li>A residence permit or a visa (does not apply to EU citizens).</li>
                                    <li>An admission decision confirmation from your university, showing the duration of your studies.</li>
                                </ul>
                            </div>

                            <p><strong>In certain cases, the bank may still refuse to open an account, if:</strong></p>

                            <div className="content">
                                <ul>
                                    <li>The bank is not satisfied with the identity document submitted.</li>
                                    <li>The bank determines that the reason given by you to open an account is inadequate.</li>
                                    <li>The bank, by opening an account, would be in breach of a legal regulation or directive.</li>
                                    <li>You have previously acted dishonestly towards the bank.</li>
                                </ul>
                            </div>
                            {/*  */}

                            <span className="sub-title">Before</span>
                            <h3>Visiting A Bank …</h3>

                            <div className="content">
                                <ul>
                                    <li>You must be able to understand the bank’s questions as well as answer them.</li>
                                    <li>You must also be able to understand the information that the bank gives you.</li>
                                    <li>In case you need someone to translate for you then you should bring such a person with you while visiting the bank.</li>
                                    <li>The bank will ask you about the source of income.</li>
                                    <li>Your account and other bank services must not be used by anyone else unless an agreement for this is held with the bank.</li>
                                    <li>The bank may ask you additional questions or stipulate other requirements.</li>
                                </ul>
                            </div>
                            {/*  */}

                            <span className="sub-title">How to get a </span>
                            <h3>Driving License</h3>
                            <p>In case you have a driving license issued by any EU country then it is valid throughout your stay in Sweden. You can even exchange your driving license with a Swedish license if you have permanent residence(PR).</p>
                            <p>A driving license which is issued by any non-EEA country (excluding Switzerland and Japan) is valid for maximum one year in Sweden. It cannot be exchanged with a Swedish license. So if you want to continue driving in Sweden you must avail a swedish driving licence. For which you will have to complete the risk education, theoritical and practical driving exam.</p>
                            For more details, please visit: <a href="https://www.transportstyrelsen.se/en/road/Driving-licences/">https://www.transportstyrelsen.se/en/road/Driving-licences/</a>
                            {/*  */}
                            
                            <h3>Steps To Get A License</h3>

                            <div className="content">
                                <ul>
                                    <li>Apply for a learning permit</li>
                                    <li>Start your driving practice</li>
                                    <li>Study the theory of driving</li>
                                    <li>Take the risk training – riskutbildning</li>
                                    <li>Book a time for a driving test.</li>
                                </ul>
                            </div>

                            {/*  */}
                            <br />
                            <h3>For Work In Sweden</h3>

                            <p>
                            <a href="https://arbetsformedlingen.se/other-languages/english-engelska">The Swedish Public Employment Service</a> (Arbetsförmedlingen) offers support to people looking for work. You can register either online using your Bank-ID or by personally visiting the nearest Arbetsförmedlingen office. Apart from arbetrsförmedlingen, there are many other privately run job websites like LinkedIn, Indeed, etc. commonly used to find a job in Sweden. These websites usually include job listings and functions where you can upload your CV.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Swedish Education System</span>
                            <h3>School Admissions</h3>
                            <p>Swedish preschools emphasises the importance of play in child’s developement. There is a great  focus on basic values and individual needs such as playing together, tolerance and being considerate for others. Preschool is provided for children aged 1 to 5 years.</p>
                            <p>The year your child turns 6, he or she can participate in a non-compulsory preschool class (sexårsverksamhet) designed to help children meet future classmates and prepare for primary school without the stress of heavy studies or homework. Swedish compulsory schooling is divided ino four stages: förskoleklass (‘preschool year’ or year 0), lågstadiet (years 1–3), mellanstadiet (years 4–6) and högstadiet (years 7–9).</p>
                            <p>From the ages of 7 to 16, all children in Sweden are required to attend the compulsory school (grundskola), where they are taught a core group of basic subjects. Families of children between ages six and thirteen are also offered out-of-school care before and after school hours called fritids.</p>
                            <p>Although preschools and after-school care are paid services, but from the age of 6 years all schooling in Sweden is free of charge and one hot meal during the day is also included. However if you want your child to study in private schools then private and international schools do exist in sweden and there is usually a fee for such schools.</p>
                            {/*  */}
                            <br />
                            <span className="sub-title">Parental Leave</span>
                            <h3>(Föräldraledighet)</h3>
                            <p>In Sweden, a parent is entitled to take parental leave of up to 240 days individually(total 480days for both parents) until their child is 8 years old in order to take care of them. During the leave, parents are entitled to get a fixed allowance from State Insurance Authority(Försäkringskassan) in accordance with the law. The allowance paid may vary depending upon your job situation in Sweden for eg. If you were working or not before childbirth.</p>
                            <p>You can read about it in detail at: www.forsakringskassan.se.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Parental</span>
                            <h3>Allowance</h3>
                            <p>Parental benefit/allowance is the money you receive to be able to be at home with your child instead of working, seeking work, or studying after childbirth. Both the parents are granted 480 days of leave per child in total(240 days each). 390 of these days are income-based and 90 days are at the minimum level. If you were working in Sweden during the pregnancy or at the time of childbirth, then you might get up to 80% of your salary as parental allowance otherwise a fixed minimum amount decided by the government will be paid. It is not your employer who bears the cost of your parent benefit but it is the Swedish Social Insurance Agency (Försäkringskassan) who pays it.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Mother and Child Care</span>
                            <h3>Maternity Clinics</h3>
                            <p>The maternity clinic (barnmorskemottagningen) is primary health care facility for pregnant women which are responsible for women’s health care throughout the pregnancy and for child’s health care before, during and after birth. Visits to the government maternity clinics are free, but not in case of private care.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Child</span>
                            <h3>Health Care Centre</h3>
                            <p>At the child health centre or barnavårdscentralen (BVC), you can get tips about your child’s development, breastfeeding, food and illnesses. When you come home after childbirth, you can contact the child health centre to make an appointment for a first meeting. The first meeting is often held at home. At the meeting, the nurse tells you about the child health centre and looks to see how your baby is doing.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Child</span>
                            <h3>Care Allowance (Barnbidrag)</h3>
                            <p>Children who are born in Sweden or started living in Sweden before their first birthday are entitled to receive child allowance starting from one month after their birth. The allowance is paid to both parents until the child turns 16.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Register</span>
                            <h3>With Försäkringskassan</h3>
                            <p>You need to register with Försäkringskassan (the Swedish Social Insurance Agency) to qualify for various benefits for eg. child care allowance, unemployment benefit, parental benefit, etc. Read more at</p>
                            <a href="www.forsakringskassan.se">www.forsakringskassan.se</a>
                            {/*  */}

                            <br />
                            <span className="sub-title">Health Centre</span>
                            <h3>Health Centre</h3>
                            <p>You can visit your local health centre – vårdcentral. These centres provide a starting point for most medical treatments in Sweden.The staff can help you with health related matters and write referrals – remisser, which you need in order to see a specialist.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Costs</span>
                            <h3>And Fees</h3>
                            <p>The costs and fees for visiting a vårdcentral vary from county to county. But the costs of a visit is usually between 100 – 300 SEK and normally free for everyone under 20. Don’t forget to cancel an appointment if you don’t need it, as you will otherwise have to pay the full costs of the defaulted visit.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">What</span>
                            <h3>Is Covered?</h3>
                            <p>Anyone, registered as resident in Sweden, is entitled to free dental care up to and including the 31 of December of the year you turn 23. Adults on the other hand, pay a large part of their dental care costs themselves, starting on the 1 January of the year they turn 23.</p>
                            <p>For asylum seekers and undocumented immigrants: you have the right to receive dental care free of charge until your 18th birthday.</p>
                            <p>You are, as an adult, entitled to a dental care grant of 300 or 600 SEK a year. You can save the grant for two years and use it on one occasion, but you can’t save more than two grants at the time.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Where Do</span>
                            <h3>I Find A Dentist?</h3>
                            <p>You will get a list with all the dentists affiliated with the public dental service – <i>Folktandvården</i>.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Language</span>
                            <h3>Courses</h3>
                            <p><strong>Learn Swedish in Sweden</strong></p>
                            <p>Depending on the location of your stay, there are different options for learning Swedish while in the country. More information at: www.sweden.se.</p>
                            <p>Folkuniversitetet offers Swedish courses at different levels.</p>
                            <p>Study associations also offer language courses and a wide range of other courses. See a list of study associations.</p>
                            <p>SFI-courses (Swedish for immigrants). Once you have become a resident in Sweden and have been issued a personal identity number (personnummer) you can contact your local municipality for information about Swedish lessons for immigrants (SFI). SFI is basic training in the Swedish language for adults who do not have Swedish as their first language. You can study SFI full-time or part-time. The training is free of charge.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Unemployment</span>
                            <h3>Insurance</h3>
                            <p>Payouts of unemployment insurance take two forms, a basic benefit or an income-related benefit. Registered yourself for A-Kassa as soon you start your work.</p>
                            <p>Unemployment insurance is not a part of the social insurance system in Sweden. Unemployment insurance is connected closely to the trade unions but is legally independent. When you start working in Sweden, investigate which unemployment insurance fund (widely known as A-Kassa) is available.</p>
                            <p>In order to receive an income-based benefit, you must have been a member of a voluntary unemployment insurance fund (A-kassa) for 12 months and have worked (been employed) for at least six months. In addition, some trade unions offer additional insurance against loss of income.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Recognition  of</span>
                            <h3>Higher Education Qualifications</h3>
                            <p>The European Commission has devised a system known as ECTS (European Credit Transfer System) . It allows for the transfer of higher education credits between European countries. The Swedish Council for Higher Education (UHR) evaluates foreign qualifications in order to provide support for people looking for work in Sweden, people who wish to continue studying, or for employers who wish to employ someone with foreign qualifications.</p>
                            <h5>Authorities</h5>
                            <strong>Figuring out the responsibilities of the different authorities isn’t all that easy. Who is responsible for what? Whom should you turn to with your questions, applications and concerns?</strong>
                            <p>This guide gives you a brief overview of the different authorities and their main responsibilities.</p>
                            <div className="content">
                                <ul>
                                    <li>Migrationsverket (Migration Agency)</li>
                                    <li>Skatteverket (Tax Agency)</li>
                                    <li>Arbetsförmedlingen (Public Employment Service)</li>
                                    <li>Försäkringskassan (Social Insurance Agency)</li>
                                    <li>Skolverket (National Agency for Education)</li>
                                    <li>Jordbruksverket (Swedish Board of Agriculture)• Jordbruksverket (Swedish Board of Agriculture)</li>
                                    <li>Tullverket (Swedish Customs)</li>
                                    <li>Transportstyrelsen (Transport Agency) & Trafikverket (Transport Administration)</li>
                                    <li>Transportstyrelsen (Transport Agency) & Trafikverket (Transport Administration)</li>
                                    <li>Länsstyrelserna (the County administrative boards)</li>
                                    <li>Landstingen (County councils)</li>
                                </ul>
                            </div>

                            {/*  */}

                            <br />
                            <span className="sub-title">Migrationsverket</span>
                            <h3>(Migration Agency)</h3>
                            <p>Migrationsverket (Migration Agency) is the authority to turn to if you want to visit, live in or seek asylum in Sweden, or if you want to become a Swedish citizen. Migrationsverket is also responsible for the settlement of certain new arrivals and decides on compensation to municipalities and counties.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Skatteverket</span>
                            <h3>(Tax Agency)</h3>
                            <p>Skatteverket (The Tax Agency) is in charge of tax matters but is also responsible for Sweden’s population register.  Skatteverket does your folkbokföring (registration), You can als apply for a Swedish ID card</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Arbetsförmedlingen</span>
                            <h3>(Public Employment Service)</h3>
                            <p>Arbetsförmedlingen (the Public Employment Service) is mainly responsible for labor related issues.</p>
                            <p><strong>Arbetsförmedlingen has three main services for Newly arrived people:</strong></p>
                            <div className="content">
                                <ul>
                                    <li>Nystartsjobb</li>
                                    <li>Instegsjobb</li>
                                    <li>Etableringspaket(for peple covered by the law 2010: 197)</li>
                                </ul>
                            </div>
                            {/*  */}

                            <br />
                            <span className="sub-title">Försäkringskassan</span>
                            <h3>(Social Insurance Agency)</h3>
                            <p>Försäkringskassan (the social insurance Agency) is in charge for the social insurance in Sweden and their main task is to ensure you get the benefits and allowances you are entitled to. The social insurance covers everyone who lives and works in Sweden.</p>
                            <p>Försäkringskassan is not always the determining authority (the one taking the actual decision whether or not you are entitled to a benefit or allowance), but is usually the one who pays out the benefits and allowances.</p>
                            <p><strong>Newbie relevant benefits and allowances (among many):</strong></p>
                            <div className="content">
                                <ul>
                                    <li>Etableringsersättning(introduction supplement) Information in Swedish, English, Arabic, Dari, Tingrinja, Somali)</li>
                                    <li>Etableringstillägg(financial supplement that can be added to the introduction supplement if you have children) Information in Swedish</li>
                                    <li>Bostadsersättning(housing allowance)</li>
                                    <li>Föräldraförsäkring(parental leave)</li>
                                </ul>
                            </div>
                            {/*  */}

                            <br />
                            <span className="sub-title">Skolverket</span>
                            <h3>(National Agency For Education)</h3>
                            <p>Skolverket (National Agency for Education) is the central authority for education in Sweden. They offer an English- language guide to the Swedish school system. They also process applications for teachers with foreign qualifications that wish to work in Sweden.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Jordbruksverket</span>
                            <h3>(Board Of Agriculture)</h3>
                            <p>Jordbruksverket is in charge of agricultural and horticultural matters in Sweden. They are the authority to turn to if you want to bring your dog or cat to Sweden.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Tullverket</span>
                            <h3>(Customs)</h3>
                            <p>Tullverket (Customs) is charge of the flows of goods in and out of Sweden. Check with Tullverket when bringing or shipping goods in and out of Sweden. They have a guide in English especially for Newbies.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Transportstyrelsen (Transport Agency)</span>
                            <h3>& Trafikverket (Transport Administration)</h3>
                            <p>Transportstyrelsen and Trafikverket are in charge of everything concerning driving licenses as well as other transport- and traffic-related rules and regulations in Sweden. If you want to find out more visit their common website – körkortsportalen –</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Kommunerna</span>
                            <h3>(The Municipalities)</h3>
                            <p>Kommunerna (the municipalities) fill an important and complex task in Sweden. They are responsible for the SFI teaching, Komvux (adult education) and samhällsorientering (social orientation). Yet, they are also responsible for the receiving and housing of Newbies covered by the law (2000: 1383), and shall, if necessary, provide practical assistance in connection with the settlement.</p>
                            <p>The municipalities are furthermore responsible for the financial support of Newbies who are not covered by law (2010:197). You belong to the municipality where you made your registration (folkbokföring).</p>
                            <p><strong>Your municipality is in charge for:</strong></p>
                            <div className="content">
                                <ul>
                                    <li>SFI(Swedish teaching)</li>
                                    <li>Komvux(Adult education)</li>
                                    <li>Samhällsorientering(Social Orientation)</li>
                                    <li>Education (child care, preschool, school etc.)</li>
                                    <li>Financial support for Newbies who aren’t covered by the law (2010:197)</li>
                                    <li>Receiving and Housing of Newbies (covered by the law 200: 1383)</li>
                                </ul>
                            </div>
                            {/*  */}

                            <br />
                            <span className="sub-title">Länsstyrelserna</span>
                            <h3>(The County Administrative Boards)</h3>
                            <p>Länsstyrelserna (the county administrative boards) represent the government in the county. Their task is to coordinate and supervise the work of the different actors and authorities and thereby ensure that national goals and objects are achieved. It is  Länsstyrelserna’s task to ensure that the municipalities are prepared to receive Newbies, but also help the municipalities coordinate the SFI teaching and the society orientation.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">Landstingen</span>
                            <h3>(The County Councils)</h3>
                            <p>Landstingen (the county councils) are in charge of everything concerning healthcare matters in Sweden.</p>
                            <p><strong>Länsstyrelserna (The County administrative boards)</strong></p>
                            <p>Länsstyrelserna (the county administrative boards) represent the government in the county. Their task is to coordinate and supervise the work of the different actors and authorities and thereby ensure that national goals and objects are achieved. It is  Länsstyrelserna’s task to ensure that the municipalities are prepared to receive Newbies, but also help the municipalities coordinate the SFI teaching and the society orientation.</p>
                            <p><strong>Landstingen (The County councils)</strong></p>
                            <p>Landstingen (the county councils) are in charge of everything concerning healthcare matters in Sweden.</p>
                            {/*  */}

                            <br />
                            <span className="sub-title">ACCOMODATION</span>
                            <h3>Finding Home</h3>
                            <p>Perhaps you arranged temporary lodging or rented a room before arriving in Sweden and may want to move as temporary arrangements come to an end. Looking for your own place to stay can be a challenging task in larger cities such as Stockholm, Gothenburg and Malmö, where available housing remains relatively scarce.</p>
                            <p>You can rent ‘first-hand’ or ‘second-hand’ in Sweden. First-hand (första hand) means you sign an agreement with the owner of the building, while second-hand (andra hand) means you sign an agreement with someone who owns the flat or has the first-hand contract on the flat.</p>
                            <p>To get a first-hand contract, you need to register to be put on the municipal waiting list (bostadskö) and it can take anywhere from a few days in some municipalities to up to ten years for central locations in cities like Stockholm for a first-hand contract to become available.</p>
                            <p>As a new resident, you’ll probably be renting a flat from someone who sublets in a second-hand arrangement. It is extremely important to make sure that the tenant co-operation board of the building (bostadsrättsföreningen) or the landlord has signed off on second-hand leasing. If you rent a flat from a subletter who doesn’t have permission, you run the risk of being evicted (to make a long story short).</p>
                            <p>Useful websites for finding flats in cities around the country are</p>

                            <div className="content">
                                <ul>
                                    <li>Samtrygg</li>
                                    <li>Blocket.se</li>
                                    <li>BostadDirekt.com</li>
                                    <li>expatshomerental.eu</li>
                                </ul>
                            </div>
                            {/*  */}

                            <br />
                            <span className="sub-title">USEFULL</span>
                            <h3>LINKS</h3>
                            <p><strong>Personnummer & ID card</strong></p>
                            <a href="www.skatteverket.se">www.skatteverket.se</a>
                            <p><strong>Application for Swedish Language</strong></p>
                            <a href="(https://malmo.se/…/Sfi—svenska…/Sfi-intensivkurs.html)">(https://malmo.se/…/Sfi—svenska…/Sfi-intensivkurs.html)</a>
                            <p><strong>Apartments Search</strong></p>
                            <a href="www.boplats.se">www.boplats.se</a>
                            <p><strong>Registration for Job Search</strong></p>
                            <a href="www.arbetsförmedlingen.se">www.arbetsförmedlingen.se</a>
                            <p><strong>Business Registration</strong></p>
                            <a href="www.verksamt.se">www.verksamt.se</a>
                            <p><strong>Driving Test</strong></p>
                            <a href="https://www.trafikverket.se/korkort/boka-prov/">https://www.trafikverket.se/korkort/boka-prov/</a>
                            <p><strong>Change you EU B-Driving License</strong></p>
                            <a href="https://transportstyrelsen.se/…/ansokan-om-utbyte-av…/">https://transportstyrelsen.se/…/ansokan-om-utbyte-av…/</a>
                            <p><strong>Change your Taxi License</strong></p>
                            <a href="https://transportstyrelsen.se/…/taxi…/">https://transportstyrelsen.se/…/taxi…/</a>
                            <p><strong>Buy/Sell Everything</strong></p>
                            <a href="www.blocket.se">www.blocket.se</a>
                            <p><strong>Buy Sell House</strong></p>
                            <a href="www.hemnet.se">www.hemnet.se</a>
                            <p><strong>Furniture</strong></p>
                            <a href="www.ikea.se">www.ikea.se</a>
                            <p><strong>Residence Permit</strong></p>
                            <a href="www.migrationsverket.se">www.migrationsverket.se</a>
                            <p><strong>Foreign Educational Document evaluation</strong></p>
                            <a href="www.Uhr.se">www.Uhr.se</a>
                            <p><strong>Applying for Study in Sweden-English</strong></p>
                            <a href="www.universityadmisisons.se">www.universityadmisisons.se</a>
                            <p><strong>Apply for study in Sweden-Swedish</strong></p>
                            <a href="https://www.antagning.se/se/start">https://www.antagning.se/se/start</a>
                            <a href="https://www.utbyten.se/">https://www.utbyten.se/</a>
                            <p><strong>PHD Search</strong></p>
                            <a href="https://www.euraxess.se/">https://www.euraxess.se/</a>
                            <p><strong>Apply for Children’s Playgroup and School</strong></p>
                            <a href="https://malmo.se/…/Utbildning-och-forskola/Forskola.html">
                                https://malmo.se/…/Utbildning-och-forskola/Forskola.html        
                            </a>
                            <a href="https://malmo.se/…/Utbildni…/Utbildningar-for-vuxna.html">https://malmo.se/…/Utbildni…/Utbildningar-for-vuxna.html</a>
                            <p><strong>Social Rights</strong></p>
                            <a href="https://www.forsakringskassan.se">https://www.forsakringskassan.se</a>
                            {/*  */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewInSwedenDetail;