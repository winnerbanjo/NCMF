# Nollywood Creative Minds Forum website
Product requirements document | Draft for client review | 20 November 2026

## 1. Product purpose
Build the official website for the Nollywood Creative Minds Forum (NCMF), a professional association of Nigerian film practitioners established in 2015. A filmmaker visiting for the first time should be able to understand the benefits of membership, see who runs the forum, and submit an application. A returning member should have a clear place to find programmes, events and the forum’s official support contact.

The discovery response ranks member engagement first. It gives medium priority to advocacy and achievements, event registration and ticketing, and membership registration and renewals. Online membership registration is the only feature explicitly entered in the required-features field. The launch scope below is a proposal for sign-off.

## 2. Users and their main tasks
- Prospective members want to check eligibility, benefits and fees, apply, and understand what happens next.
- Existing members want to find upcoming activities, contact the forum and take part in its professional network.
- Industry stakeholders, press and prospective partners want to understand the forum’s work, verify its leadership and find an official contact.
- The designated NCMF administrator needs to receive applications, record decisions and keep public information current. NCMF still needs to appoint this person and approve their permissions.

## 3. Proposed launch pages
| Page | Content and primary action |
| --- | --- |
| Home | Introduce the forum, feature its next approved activity or a recent programme, and give visitors a clear Join NCMF action. |
| About | Use the approved organisation history, mission, vision “Optimizing Potentials,” and values of professionalism and collaboration. Describe its work in training, mentorship, networking and industry welfare. |
| Leadership | Group executives, advisers and chapter officers by approved role. Publish a name, title, approved biography and available portrait for each. |
| Membership | Explain the Professional category, eligibility, welfare package, networking and training benefits. Show approved fees and application steps. Allow eligible visitors to apply online. |
| Programmes and events | Feature the annual In Pursuit of Better seminar, training, masterclasses and film screenings. Distinguish past events from upcoming ones. Offer registration only when an organiser supplies the details and link. |
| Projects and gallery | Present short films, the feature film once its title is confirmed, and the 2024 seminar and merit awards at Four Points by Sheraton, Lagos. Publish captioned, approved media. |
| Contact | Show the official email, phone and Okota address. Add the approved WhatsApp contact and official Instagram account when supplied. |

## 4. Functional requirements and acceptance criteria
| Feature | Proposed behaviour | Acceptance check |
| --- | --- | --- |
| Membership application | Start with name, email, phone and creative discipline. NCMF must approve the fields, eligibility rules and application notice. Show the next step after submission. | A valid submission creates one pending application and a confirmation. Invalid entries show a specific correction. Retrying the same submission creates no duplicate. |
| Application review | An authorised reviewer can see submitted details and record a decision. NCMF defines who reviews, who contacts the applicant and when membership takes effect. | The reviewer can retrieve an application and see its status after updating it. A public visitor cannot access applicant records. |
| Public directory | The form records support for a directory. Proposed publication requires an approved member, agreed public fields and the member’s permission. | Only approved, opted-in profiles appear. Withdrawing permission removes the listing. Applicant contact details remain private by default. |
| Content administration | Allow designated staff to draft, preview, publish and update leadership profiles, events, projects and gallery captions. | An editor can correct a title or reschedule an event through the CMS. Drafts stay private until published. |
| Events | An upcoming event may include a date, venue and organiser-approved registration link. Retain completed events in the archive. | An event without a registration link has no booking button. A past event appears in the archive. |
| Support and social | WhatsApp live chat support is requested. Confirm whether the client wants a click-to-chat link or an embedded service. Instagram is the priority platform. | The published links open the approved NCMF accounts on mobile. The President’s personal Instagram is kept distinct from the organisation’s account. |
| Mobile usability | The team proposes accessible navigation, labelled form fields, readable text and optimised images. | A visitor can move from the homepage to a completed application on a phone and by keyboard. Validation errors identify the field that needs attention. |

## 5. Membership and commercial decisions
The form describes membership as open to established entertainment practitioners. A separate answer says applicants must already be registered and active members. NCMF should provide separate eligibility rules for first-time applicants and existing members seeking renewal.

The only fee supplied is “20,000 registration.” Currency, payment recipient, collection method, timing, renewal fee and renewal interval are unconfirmed. Treat application submission, approval and payment as separate events. The proposed first release can collect applications while the client decides how payment works. Online payment, automated renewals, member accounts and paid event ticketing need separate approval before estimation.

## 6. Content available for the build
- Ijeoma Richards, Co-Founder and National President. Actor, producer, CEO of TRIMM Network and founder of the biennial Film Industry Legacy Award. Her email includes a full biography, personal contact links and an image.
- Tolulope Odebunmi, Head of Media. Founder of JISYEM’S View Productions and director and producer of Bottled Up. His email identifies his NCMF role, which is missing from the form’s executive roster.
- Bukola “Bukky” Thomas, identified as Vice President. Actor, model and voice-over artist who moved from marketing into Nollywood in 2013. Confirm her preferred public name and exact title.
- Stella-Maris Nnaji, Secretary. Actor, producer and director with over 15 years in the industry and eight years as Secretary of the Actors Guild of Nigeria’s Lagos chapter. Her Word biography includes repeated sections and needs editing.
- Other executives named in the form are Kayode Freeman (Vice President), Emeka Okoye (National Coordinator), Vivian Nicolas (Treasurer), Lilian Chille (Welfare Officer), Morgan Nwamba (Vice Coordinator) and Kolade Owolabi (Kwara State chapter coordinator).
- The board field names Keppy Ekpenyong Bassey and Ngozi Nwosu as industry advisers. It also lists Memuna Yahaya Abaje without a title.
- The gallery email contains four images without captions. Four further images accompanied individual profiles. Their original filenames and source emails are preserved in the pack.
- Official contact supplied in the form is nollywoodcreativemindsforum18@gmail.com, 08118050555, 14 Anite Crescent, Okota, Lagos, Nigeria. JISYEM’S View Production is the content sender.

## 7. Decisions required for publication
| Decision owner | Decision or material needed | What it unlocks |
| --- | --- | --- |
| NCMF leadership | Confirm official organisation spelling, both Vice President entries, Bukky’s display name, Tolulope’s place on the roster and Memuna’s title. Approve the final biographies. | About and Leadership pages |
| Membership lead, to be named | Confirm first-time eligibility, required fields, review process, fee currency, payment timing and renewal rules. Approve directory fields and consent wording. | Application launch and directory scope |
| Media or content approver, to be named | Resolve the film title. The form says “Perfect Divorced” and Ijeoma’s email says “Perfect for Divorce.” Supply gallery captions, dates, credits and publishing permission. | Projects and gallery |
| NCMF communications | Supply the logo, brand guidance if available, official Instagram handle, WhatsApp number, next event details and any registration link. | Branding, contact and event promotion |
| NCMF technical owner, to be named | Confirm the domain, hosting budget and administrator access. The form prefers a dedicated server. Procurement and operating responsibility remain open. | Deployment and handover |

## 8. Release and measurement
The team can begin page structure, draft copy and the application prototype with the material supplied. Before accepting live applications, test the form end to end with the appointed reviewer, approve the eligibility and fee wording, and verify the confirmation message. Publish the directory after NCMF approves its fields and permissions.

Proposed measures are completed applications as a share of application starts, median time to a membership decision, and registrations or outbound registration clicks per event. Agree targets with NCMF after a baseline is available. The supplied materials contain no approved project budget, launch date or numerical success targets.
