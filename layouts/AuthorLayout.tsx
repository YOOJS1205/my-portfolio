import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { ABOUT_DATA } from '@/data/aboutData'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { avatar, email, linkedin, github, blog } = content

  return (
    <div className="mx-auto max-w-[840px]">
      <div className="flex items-center gap-10 space-y-2 pt-6 md:space-y-5">
        {avatar && (
          <Image
            src={avatar}
            alt="avatar"
            width={192}
            height={192}
            className="h-48 w-48 rounded-full"
          />
        )}
        <div>
          <h1 className="whitespace-pre-line text-[24px] font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-[28px] sm:leading-10 md:text-[36px] md:leading-14">
            <p>안녕하세요.</p>
            <p>프론트엔드 개발자 유준상입니다.</p>
          </h1>
          <div className="flex items-center space-x-4 pt-6">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
            <SocialIcon kind="github" href={github} />
            <SocialIcon kind="linkedin" href={linkedin} />
            <a className="text-[18px]" href={blog} target="_blank">
              Blog
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10 space-y-2 pt-6 md:space-y-5">
        <ul className="prose max-w-none pb-8 pt-8 text-[18px] dark:prose-invert xl:col-span-2">
          {children}
        </ul>
      </div>
      <h2 className="mb-10 whitespace-pre border-b-[2px] border-black pb-4 text-[24px] font-extrabold leading-9 tracking-tight text-gray-900 dark:border-white dark:text-gray-100 sm:text-[28px] sm:leading-10 md:text-[36px] md:leading-14">
        Work Experience
      </h2>

      <div className="flex gap-10 pb-10 max-[768px]:flex-col max-[768px]:gap-6">
        <div className="flex w-full flex-col gap-2 border-black dark:border-white min-[768px]:w-[30%] min-[768px]:border-r-[2px]">
          <p className="text-[28px] font-bold">클랩(CLAP)</p>
          <p className="text-[20px]">Frontend Engineer</p>
          <p className="text-[20px]">2024.03 ~</p>
        </div>
        <div className="flex flex-col gap-10 min-[768px]:w-[70%]">
          <div className="flex flex-col gap-4">
            <p className="rounded-lg bg-teal-500 px-4 py-4 text-[18px] font-semibold">
              최고의 조직을 만드는 성장관리 솔루션 클랩을 개발, 유지보수합니다.
            </p>
            <ul className="flex list-disc flex-col gap-4 pl-6">
              <li>
                성능 개선 TF에 소속되어 최대 규모 고객사 시나리오 기반으로 전반적인 프로덕션 성능을
                개선하였습니다.
              </li>
              <li className="ml-4">
                리스트 컴포넌트에 UI 가상화를 적용하여, 필요한 데이터만 렌더링하도록 하였습니다.
              </li>
              <li>테이블 컴포넌트 사용성 개선</li>
              <li className="ml-4">
                기존에 기능별로 분리되어있던 Provider를 하나로 합치고, 전달받은 props를 기반으로
                접근할 수 있는 테이블 상태만 반환하도록 수정하였습니다.
              </li>
              <li className="ml-4">
                이를 통해, 하나의 커스텀 훅으로 테이블 상태를 관리할 수 있도록 하였고, BoilerPlate를
                줄여 개발 생산성을 향상하였습니다.
              </li>
              <li>
                Atomic design과 Storybook을 이용하여 컴포넌트 단위로 개발하였습니다. 디자이너와 팀
                개발자와 함께 소통하여 컴포넌트 단위를 정의하고 문서화하였습니다.
              </li>
              <li>Jest를 활용하여 유틸 함수와 커스텀 훅에 대한 테스트 코드를 작성하였습니다.</li>
              <li>
                Sentry 모니터링을 통해 VOC가 들어오기 이전에 버그를 발견하고, 해결하기 위해
                노력합니다.
              </li>
              <li className="ml-4">
                정상 에러와 Sentry로 수집해야하는 에러를 구분하여 무분별하게 에러가 수집되는 현상을
                방지하였습니다. 이를 통해, Sentry에 수집되는 에러에 대해 경각심을 가지고 대응합니다.
              </li>
              <li>
                목표 관리 도메인에서 클라이언트에서 선언한 타입과, dto의 타입의 싱크가 맞지 않아
                버그가 발생하는 현상을 피쳐 개발과 병렬적으로 진행하여 해결하였습니다.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-10 pb-10 max-[768px]:flex-col max-[768px]:gap-6">
        <div className="flex w-full flex-col gap-2 border-black dark:border-white min-[768px]:w-[30%] min-[768px]:border-r-[2px]">
          <p className="text-[28px] font-bold">중고나라</p>
          <p className="text-[20px]">Frontend Engineer</p>
          <p className="text-[20px]">2023.03 ~ 2024.03</p>
        </div>
        <div className="flex flex-col gap-10 min-[768px]:w-[70%]">
          <div className="flex flex-col gap-4">
            <p className="rounded-lg bg-teal-500 px-4 py-4 text-[18px] font-semibold">
              MAU 160만의 중고나라 웹서비스를 개발, 유지보수합니다.
            </p>
            <ul className="flex list-disc flex-col gap-4 pl-6">
              <li>채팅 서비스를 구축하여 중고나라 앱서비스 대비 매출 10% 달성에 기여하였습니다.</li>
              <li>
                Suspense와 Lazy Loading을 이용하여 스켈레톤 UI를 제공하고, Suspense를 사용하면서
                발생한 Network Waterfall을 해결하여 로딩 속도를 감축하였습니다.
              </li>
              <li>
                Elasticsearch에서 받아오는 상품리스트 데이터가 실시간성을 보장받지 못해 임의로
                delay를 주고 요청했던 문제를 낙관적 업데이트를 통해 사용자가 기다리지 않도록
                개선하였습니다.
              </li>
              <li>
                AWS Amplify가 정적 IP 주소를 제공하지 않는 이슈를 확인하고, 사내망 IP 주소에서만
                사용되는 테스트 환경을 Docker 환경으로 마이그레이션 하기 위해 Dockerfile를
                작성하였습니다.
              </li>
              <li>
                서버에서 내려오는 정보들의 특성을 이해하고, Tanstack Query의 staleTime과 cacheTime을
                적절하게 활용하여 네트워크 요청 수를 줄였습니다.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="rounded-lg bg-teal-500 px-4 py-4 text-[18px] font-semibold">
              700만 가입자의 중고나라 앱 내의 웹뷰를 개발, 유지보수합니다.
            </p>
            <ul className="flex list-disc flex-col gap-4 pl-6">
              <li>
                React Testing Library를 이용하여 중고나라의 핵심 기능인 배송 관련 UI 테스트 코드를
                작성하고, 이를 기반으로 받는 분, 보내는 분 배송지 추가의 로직을 QA팀의 리소스 없이
                안전하게 분리하였습니다.
              </li>
              <li>
                팀원이 개발한 배송 기능 관련 로직을 테스트 코드 작성, 리팩토링 등으로 체화하고, 이를
                통해 성공적으로 세븐일레븐 편의점 택배 서비스를 개발하였습니다.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 프로젝트 */}
      <h2 className="mb-10 whitespace-pre border-b-[2px] border-black pb-4 text-[24px] font-extrabold leading-9 tracking-tight text-gray-900 dark:border-white dark:text-gray-100 sm:text-[28px] sm:leading-10 md:text-[36px] md:leading-14">
        Project
      </h2>
      <div className="flex gap-10 pb-10 max-[768px]:flex-col max-[768px]:gap-6">
        <div className="flex w-full flex-col gap-2 border-black dark:border-white min-[768px]:w-[30%] min-[768px]:border-r-[2px]">
          <p className="text-[28px] font-bold">또잇또잇</p>
          <p className="text-[20px]">2023.11 ~ 2024.02</p>
        </div>
        <div className="flex flex-col gap-10 min-[768px]:w-[70%]">
          <div className="flex flex-col gap-4">
            <p className="rounded-lg bg-teal-500 px-4 py-4 text-[18px] font-semibold">
              맛집을 알아보기 위한 새로운 기준을 제공합니다. <br />두 번 이상 간 내 맛집을 공유하는
              서비스
            </p>
            <ul className="flex list-disc flex-col gap-4 pl-6">
              <li>팀 리드로서 회의를 주도적으로 진행하고, 파트 별 일정관리를 담당하였습니다.</li>
              <li>로그인, 약관, 검색, 리뷰 작성 페이지 및 기능을 담당하여 개발하였습니다.</li>
              <li>
                Github Actions의 workflow를 통해 CI 단계에서 Lint, 빌드 테스트, 프리뷰 기능을
                추가하여 배포 시 에러가 발생할 수 있는 가능성을 낮췄습니다.
              </li>
              <li>
                첫 로그인 여부에 따른 리다이렉트 로직을 Next.js의 middleware를 활용하여 서버
                사이드에서 수행하도록 하였고, 이를 통해 사용자가 빈 화면을 보지 않도록 하였습니다.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 활동 */}
      <h2 className="mb-10 whitespace-pre border-b-[2px] border-black pb-4 text-[24px] font-extrabold leading-9 tracking-tight text-gray-900 dark:border-white dark:text-gray-100 sm:text-[28px] sm:leading-10 md:text-[36px] md:leading-14">
        Activity
      </h2>
      <div className="flex flex-col gap-[60px] pb-10">
        <div className="flex gap-10 pb-10 max-[768px]:flex-col max-[768px]:gap-6">
          <div className="flex w-full flex-col gap-2 border-black dark:border-white min-[768px]:w-[30%] min-[768px]:border-r-[2px]">
            <p className="text-[28px] font-bold">디프만 14, 15기</p>
            <p className="text-[20px]">2023.11 ~ 2024.09</p>
          </div>
          <div className="flex flex-col gap-10 min-[768px]:w-[70%]">
            <div className="flex flex-col gap-4">
              <ul className="flex list-disc flex-col gap-4 pl-6">
                <li>
                  디자이너와 개발자가 만나 서비스 기획부터 런칭까지 하나의 프로덕트를 완성하며
                  성장하는 IT 커뮤니티인 디프만에 프론트엔드 개발자로 참여하였습니다.
                </li>
                <li>프로젝트 팀 리드를 담당하였습니다.</li>
                <li>15기에는 운영진으로 참여하여, 70명 규모의 행사를 전반적으로 관리하였습니다.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-10 pb-10 max-[768px]:flex-col max-[768px]:gap-6">
          <div className="flex w-full flex-col gap-2 border-black dark:border-white min-[768px]:w-[30%] min-[768px]:border-r-[2px]">
            <p className="text-[28px] font-bold">SOPT 31기</p>
            <p className="text-[20px]">2022.09 ~ 2023.01</p>
          </div>
          <div className="flex flex-col gap-10 min-[768px]:w-[70%]">
            <div className="flex flex-col gap-4">
              <ul className="flex list-disc flex-col gap-4 pl-6">
                <li>대학생 연합 IT 벤쳐창업 동아리인 SOPT에 프론트엔드 개발자로 참여하였습니다.</li>
                <li>기획자, 디자이너, 백엔드 개발자와 협업하여 서비스 배포를 경험하였습니다.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-10 pb-10 max-[768px]:flex-col max-[768px]:gap-6">
          <div className="flex w-full flex-col gap-2 border-black dark:border-white min-[768px]:w-[30%] min-[768px]:border-r-[2px]">
            <p className="text-[28px] font-bold">멋쟁이사자처럼 프론트엔드 스쿨 2기</p>
            <p className="text-[20px]">2022.03 ~ 2023.08</p>
          </div>
          <div className="flex flex-col gap-10 min-[768px]:w-[70%]">
            <div className="flex flex-col gap-4">
              <ul className="flex list-disc flex-col gap-4 pl-6">
                <li>멋쟁이사자처럼에서 주관하는 프론트엔드 스쿨 2기에 참여하였습니다.</li>
                <li>
                  프론트엔드 개발자 4명이 팀을 이뤄 React 기반 오픈마켓 서비스를 개발하였습니다.
                </li>
                <li>
                  팀장 역할을 수행하고, Git, Github 사용이 처음이라 어려움을 겪는 팀원들을 위해
                  프로젝트 이전 시뮬레이션을 기획하고 주도하였습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 학력 */}
      <h2 className="mb-10 whitespace-pre border-b-[2px] border-black pb-4 text-[24px] font-extrabold leading-9 tracking-tight text-gray-900 dark:border-white dark:text-gray-100 sm:text-[28px] sm:leading-10 md:text-[36px] md:leading-14">
        Education
      </h2>
      <div>
        <p className="text-[20px]">경희대학교</p>
        <p className="text-[20px]">2017.03 ~ 2023.08</p>
        <p>산업경영공학과 졸업</p>
      </div>
    </div>
  )
}
