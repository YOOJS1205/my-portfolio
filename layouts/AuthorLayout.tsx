import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from 'next/link'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { avatar, email, linkedin, github, blog } = content

  return (
    <main className="mx-auto max-w-[1024px] font-semibold">
      <div className="flex items-center justify-between gap-10 space-y-2 pt-6 md:space-y-5">
        <div className="flex flex-col justify-between">
          <h1 className="whitespace-pre-line font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-[24px] sm:leading-10 md:text-[24px] md:leading-14">
            Product Engineer 유준상입니다.
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
        {avatar && (
          <Image
            src={avatar}
            alt="avatar"
            width={168}
            height={168}
            className="h-48 w-48 rounded-full"
          />
        )}
      </div>
      <ul className="flex flex-col gap-4 py-6">{children}</ul>
      <h3 className="mb-10 whitespace-pre border-b-[2px] border-black text-[16px] font-bold leading-9 tracking-tight text-gray-900 dark:border-white dark:text-gray-100 sm:text-[20px] sm:leading-10 md:text-[20px] md:leading-14">
        Work Experience
      </h3>

      <div className="flex flex-col gap-10 pb-10">
        <div className="flex gap-10">
          <div className="flex w-[20%] flex-col gap-2 dark:border-white">
            <p className="text-xl font-bold">클랩(CLAP)</p>
            <p className="text-md font-medium text-gray-700 dark:text-gray-300">
              Frontend Engineer
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2024.03 ~ 재직 중</p>
          </div>
          <div className="w-[80%] rounded-xl border border-teal-200 bg-teal-50 px-6 py-4 shadow-sm">
            <p className="text-md mb-2 font-bold text-teal-800">
              목표 관리, 리뷰 등으로 조직의 성장을 돕는 클랩 서비스입니다.{' '}
              <Link href="https://welcome.clap.company" target="_blank" className="underline">
                (링크)
              </Link>
            </p>
            <p className="text-sm text-gray-700">
              제품의 복잡도를 줄이고, 사용자 경험을 향상시키는 방향으로 기능을 설계하고 개발합니다.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <section className="text-md">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
              클라이언트–서버 간 계산 불일치로 발생할 수 있는 평가 오류를 사전에 차단
            </h3>
            <ul className="flex flex-col gap-2 space-y-2 text-gray-700 dark:text-gray-200">
              <li>
                등급별 퍼센티지를 기반으로 할당 인원을 계산하는 과정에서, 클라이언트와 서버가 각각
                계산을 수행하며 <strong>소수점 처리 방식 차이로 결과 불일치 가능성</strong>이
                존재했습니다.
              </li>
              <li>
                이를 해결하기 위해 고객사 시나리오 기반 싱크 미팅을 주도하고,{' '}
                <strong>엣지 케이스를 포함한 테스트 케이스를 정의</strong>한 뒤 클라이언트와 서버
                양쪽에 동일한 테스트 코드를 적용하여 <strong>계산 로직의 일관성을 강제</strong>
                했습니다.
              </li>
            </ul>
            <ul className="flex list-disc flex-col gap-2 pl-6 pt-4">
              <li>QA 과정에서 계산 관련 이슈 없이 검증 완료 → QA 리드타임 단축</li>
              <li>운영 배포 이후 관련 VOC 0건</li>
            </ul>
          </section>

          <section className="text-md">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
              대량 데이터 세팅을 사용자 주도로 전환 및 동시 수정으로 인한 데이터 충돌 문제 해결
            </h3>
            <ul className="flex flex-col gap-2 space-y-2 text-gray-700 dark:text-gray-200">
              <li>
                보상 대상자 및 리뷰 매칭 정보를 기존에는 수동 입력하거나 CS 팀이 대신 세팅해야 하는
                구조로 인해 <strong>운영 비용이 높고 사용자 자율성이 제한되는 문제</strong>가
                있었습니다.
              </li>
              <li>
                이를 해결하기 위해 엑셀 업로드를 도입하여{' '}
                <strong>사용자가 직접 대량 데이터를 일괄 관리할 수 있는 환경</strong>을
                구축했습니다.
              </li>
              <li>
                특히 다수의 관리자가 동시에 데이터를 수정하는 환경에서 발생하는 충돌 문제를 해결하기
                위해 <strong>데이터 변경 이벤트 기반으로 상태를 중앙 제어하는 구조</strong>를
                설계하고, <strong>수정 이력 기반 UX로 충돌 상황을 안내</strong>하여 데이터 정합성을
                유지했습니다.
              </li>
            </ul>
            <ul className="flex list-disc flex-col gap-2 pl-6 pt-4">
              <li>CS 팀이 수행하던 대량 세팅 작업을 사용자 기능으로 전환하여 운영 비용 절감</li>
              <li>
                동시 수정 상황에서도 데이터 충돌을 방지하는 구조를 설계해 안정적인 운영 환경 구축
              </li>
            </ul>
          </section>

          <section className="text-md">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
              사용자 행동을 재설계하고 기술 선택을 통해 테이블 성능 문제를 근본적으로 해결
            </h3>
            <ul className="flex flex-col gap-2 space-y-2 text-gray-700 dark:text-gray-200">
              <li>
                대규모 고객사 오픈 과정에서 전체 선택 시 선택된 row id가 query params로 전달되며{' '}
                <strong>URL length 제한을 초과하는 문제</strong>가 발생했습니다.
              </li>
              <li>
                로그 기반으로 사용자 행동을 분석해 전체 선택 사용성이 낮음을 확인하고,{' '}
                <strong>페이지 단위 선택으로 인터랙션을 재설계</strong>하여 문제를 근본적으로
                해결했습니다.
              </li>
              <li>
                동시에 dnd, 가상화 요구사항을 충족하기 위해{' '}
                <strong>Material React Table을 도입하고 디자인 시스템에 맞게 커스터마이징</strong>
                했으며,{' '}
                <strong>
                  가상 스크롤과 Optimistic Update 적용으로 렌더링 성능과 응답성을 개선
                </strong>
                했습니다.
              </li>
            </ul>
            <ul className="flex list-disc flex-col gap-2 pl-6 pt-4">
              <li>
                사용자 인터랙션 구조 개선을 통해 URL length 초과로 발생하던 요청 실패 문제 해결
              </li>
              <li>
                가상화 및 Optimistic Update 도입으로 대용량 데이터 환경에서도 부드러운 UX 제공
              </li>
            </ul>
          </section>

          <section className="text-md">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
              장애를 빠르게 탐지하고 대응할 수 있는 모니터링 체계를 구축
            </h3>
            <ul className="flex flex-col gap-2 space-y-2 text-gray-700 dark:text-gray-200">
              <li>
                기존 Sentry 기반 환경에서 서버 팀의 Datadog 도입에 맞춰 PoC를 진행하고,{' '}
                <strong>통합 모니터링이 가능한 Datadog으로 마이그레이션</strong>했습니다.
              </li>
              <li>
                에러 수집과 Slack 알림을 연동하여{' '}
                <strong>장애 발생 시 즉각적으로 인지할 수 있는 환경</strong>을 구축했습니다.
              </li>
              <li>
                CI에서 source map을 업로드해{' '}
                <strong>
                  에러 로그 기반으로 실제 코드 위치를 추적 가능하게 하여 디버깅 시간을 단축
                </strong>
                했습니다.
              </li>
              <li>
                <strong>에러 타입 기반 분류 및 threshold 전략 설계</strong>하고 알림 기준을
                분리하여, <strong>일반 에러는 임계치 기반, 치명적인 에러는 즉시 알림</strong>이
                가능하도록 모니터링 체계를 고도화했습니다.
              </li>
            </ul>
            <ul className="flex list-disc flex-col gap-2 pl-6 pt-4">
              <li>서버와 통합된 모니터링 환경 구축으로 장애 상황에 대한 공통된 가시성 확보</li>
              <li>Source map 기반 에러 추적으로 디버깅 시간 단축 및 대응 속도 향상</li>
              <li>에러 심각도에 따른 알림 체계 분리로 중요한 장애에 대한 빠른 대응 가능</li>
            </ul>
          </section>

          <section className="text-md">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
              📦 개발 및 릴리즈 과정의 병목을 제거하고 효율을 개선
            </h3>
            <ul className="flex flex-col gap-2 space-y-2 text-gray-700 dark:text-gray-200">
              <li>
                <strong>CI 테스트 실행 시간을 1200초 → 90초로 단축</strong>하고, ts-auto-mock의
                런타임 타입 체크로 인한 성능 병목을 제거하기 위해
                <strong>createMock 유틸을 설계</strong>하여 2600개 테스트 케이스의 실행 속도를
                개선했습니다.
              </li>
              <li>
                릴리즈 과정에서 반복적으로 발생하던 수작업을 줄이기 위해
                <strong>릴리즈 커맨드 자동 생성 도구를 개발 및 npm 패키지로 배포</strong>하고,
                <strong>Git Tag 생성 및 배포 프로세스를 자동화</strong>하여 릴리즈 효율을
                개선했습니다.
              </li>
            </ul>
            <ul className="flex list-disc flex-col gap-2 pl-6 pt-4">
              <li>테스트 실행 시간 90% 이상 단축으로 개발 및 CI 피드백 속도 개선</li>
              <li>릴리즈 프로세스 자동화를 통해 반복 작업 제거 및 배포 효율 향상</li>
            </ul>
          </section>
        </div>
      </div>

      <div className="flex gap-10 pb-10">
        <div className="flex w-[20%] flex-col gap-2 dark:border-white">
          <p className="text-xl font-bold">중고나라</p>
          <p className="text-md font-medium text-gray-700 dark:text-gray-300">Frontend Engineer</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">2023.03 ~ 2024.03</p>
        </div>
        <div className="w-[80%] rounded-xl border border-teal-200 bg-teal-50 px-6 py-4 shadow-sm">
          <p className="text-md mb-2 font-bold text-teal-800">
            MAU 160만의 중고나라 웹서비스, 앱서비스 내의 웹뷰를 개발 및 유지보수합니다.
          </p>
          <p className="text-sm text-gray-700">
            중고거래 헤비 유저로서, 사용자 관점에서 다양한 의견을 제시하고, 개발 뿐 아니라 기획
            측면에서도 기여하였습니다.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 pb-10">
        <section className="text-md">
          <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
            매출이 없던 웹 서비스에서 앱 서비스 대비 10% 매출을 낼 수 있도록 기여
          </h3>
          <ul className="flex flex-col gap-2 space-y-2 text-gray-700 dark:text-gray-200">
            <li>
              <strong>Web Socket 기반</strong> 채팅 서비스를 신규 구축하여 앱 대비 웹 서비스에서
              <strong> 매출 10% 달성</strong>에 기여했습니다.
            </li>
            <li>
              AWS Amplify의 고정 IP 미지원 문제를 파악하고, <strong>사내망 전용 테스트 환경</strong>
              을 <strong>Docker 기반</strong>으로 마이그레이션했습니다.
            </li>
            <li>
              <span className="font-medium">Tanstack Query의 staleTime/cacheTime</span> 설정을 통해
              네트워크 요청 수를 최적화했습니다.
            </li>
          </ul>
          <ul className="flex list-disc flex-col gap-2 pl-6 pt-4">
            <li>웹 서비스 채팅 기능 구축을 통해 신규 매출 채널 확보</li>
            <li>요청 수 최적화로 서비스 응답성과 운영 효율 개선</li>
          </ul>
        </section>

        <section className="text-md">
          <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
            사용자 관점에서 제품 사용성 개선에 기여
          </h3>
          <ul className="flex flex-col gap-2 space-y-2 text-gray-700 dark:text-gray-200">
            <li>
              <strong>Suspense & Lazy Loading</strong>을 활용해 스켈레톤 UI를 제공하고,
              <strong> Network Waterfall 문제를 해결</strong>하여 로딩 속도를 개선했습니다.
            </li>
            <li>
              Elasticsearch의 비실시간성 이슈를 <strong>낙관적 업데이트</strong>로 보완하여 사용자
              대기 시간을 최소화했습니다.
            </li>
          </ul>
          <ul className="flex list-disc flex-col gap-2 pl-6 pt-4">
            <li>지연 구간의 체감 성능 개선으로 사용성 향상</li>
            <li>검색/수정 플로우에서 대기 시간 감소</li>
          </ul>
        </section>

        <section className="text-md">
          <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
            부족한 리소스 환경에서도 코드 품질 개선 지속
          </h3>
          <ul className="flex flex-col gap-2 space-y-2 text-gray-700 dark:text-gray-200">
            <li>
              <span className="font-medium">React Testing Library</span>로 배송 관련 UI 테스트를
              구축하여 QA 리소스 없이 <strong>'받는 분/보내는 분' 로직을 안정적으로 분리</strong>
              했습니다.
            </li>
            <li>
              팀원이 개발한 로직을 <span className="font-medium">테스트 코드 기반으로 체화</span>
              하고, <strong>세븐일레븐 편의점 택배 서비스</strong> 기능을 안정적으로 런칭했습니다.
            </li>
          </ul>
          <ul className="flex list-disc flex-col gap-2 pl-6 pt-4">
            <li>QA 의존도를 줄이면서 핵심 로직 안정성 확보</li>
            <li>테스트 기반 협업으로 신규 기능의 배포 안정성 향상</li>
          </ul>
        </section>

        <section className="text-md">
          <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
            새로운 팀원의 빠른 적응을 위한 온보딩 가이드 문서화
          </h3>
          <ul className="flex flex-col gap-2 space-y-2 text-gray-700 dark:text-gray-200">
            <li>처음 합류하는 팀원이 어려워할 수 있는 AWS 환경 설정 및 사용법을 문서화했습니다.</li>
            <li>웹/앱 서비스의 히스토리 및 개발 환경을 문서화했습니다.</li>
          </ul>
          <ul className="flex list-disc flex-col gap-2 pl-6 pt-4">
            <li>신규 팀원의 초기 적응 시간 단축</li>
            <li>팀 공통 개발 컨텍스트와 운영 지식의 재사용성 강화</li>
          </ul>
        </section>
      </div>

      {/* 프로젝트 */}
      <h2 className="mb-10 whitespace-pre border-b-[2px] border-black  text-[16px] font-extrabold leading-9 tracking-tight text-gray-900 dark:border-white dark:text-gray-100 sm:text-[20px] sm:leading-10 md:text-[20px] md:leading-14">
        Project
      </h2>
      <div className="flex gap-10 pb-10">
        <div className="flex w-[20%] flex-col gap-2 dark:border-white">
          <p className="text-lg font-bold">또잇또잇</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">2023.11 ~ 2024.02</p>
        </div>
        <div className="flex w-[80%] flex-col gap-4">
          <p className="text-md rounded-xl border border-teal-200 bg-teal-50 px-6 py-4 font-bold text-teal-800">
            맛집을 알아보기 위한 새로운 기준을 제공합니다. <br />두 번 이상 간 내 맛집을 공유하는
            서비스
          </p>
          <ul className="flex list-disc flex-col gap-2 space-y-2 pl-6 text-gray-700 dark:text-gray-200">
            <li>팀 리드로서 회의를 주도적으로 진행하고, 파트 별 일정관리를 담당하였습니다.</li>
            <li>로그인, 약관, 검색, 리뷰 작성 페이지 및 기능을 담당하여 개발하였습니다.</li>
            <li>
              Github Actions의 workflow를 통해 CI 단계에서 Lint, 빌드 테스트, 프리뷰 기능을 추가하여
              배포 시 에러가 발생할 수 있는 가능성을 낮췄습니다.
            </li>
            <li>
              첫 로그인 여부에 따른 리다이렉트 로직을 Next.js의 middleware를 활용하여 서버
              사이드에서 수행하도록 하였고, 이를 통해 사용자가 빈 화면을 보지 않도록 하였습니다.
            </li>
          </ul>
        </div>
      </div>

      {/* 활동 */}
      <h2 className="mb-10 whitespace-pre border-b-[2px] border-black text-[16px] font-extrabold leading-9 tracking-tight text-gray-900 dark:border-white dark:text-gray-100 sm:text-[20px] sm:leading-10 md:text-[20px] md:leading-14">
        Activity
      </h2>
      <div className="flex flex-col gap-10 pb-10">
        <div className="flex gap-10">
          <div className="flex w-[20%] flex-col gap-2 dark:border-white">
            <p className="text-lg font-bold">디프만 14, 15기</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2023.11 ~ 2024.09</p>
          </div>
          <div className="w-[80%]">
            <ul className="flex list-disc flex-col gap-2 space-y-2 pl-6 text-gray-700 dark:text-gray-200">
              <li>
                디자이너와 개발자가 만나 서비스 기획부터 런칭까지 하나의 프로덕트를 완성하며
                성장하는 IT 커뮤니티인 디프만에 프론트엔드 개발자로 참여하였습니다.
              </li>
              <li>프로젝트 팀 리드를 담당하였습니다.</li>
              <li>15기에는 운영진으로 참여하여, 70명 규모의 행사를 전반적으로 관리하였습니다.</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex w-[20%] flex-col gap-2 dark:border-white">
            <p className="text-lg font-bold">SOPT 31기</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2022.09 ~ 2023.01</p>
          </div>
          <div className="w-[80%]">
            <ul className="flex list-disc flex-col gap-2 space-y-2 pl-6 text-gray-700 dark:text-gray-200">
              <li>대학생 연합 IT 벤쳐창업 동아리인 SOPT에 프론트엔드 개발자로 참여하였습니다.</li>
              <li>기획자, 디자이너, 백엔드 개발자와 협업하여 서비스 배포를 경험하였습니다.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 학력 */}
      <h2 className="mb-10 whitespace-pre border-b-[2px] border-black text-[16px] font-extrabold leading-9 tracking-tight text-gray-800 dark:border-white dark:text-gray-100 sm:text-[20px] sm:leading-10 md:text-[20px] md:leading-14">
        Education
      </h2>
      <div className="flex gap-10">
        <div className="flex w-[20%] flex-col gap-2 dark:border-white">
          <p className="text-lg font-bold">경희대학교</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">2017.03 ~ 2023.08</p>
        </div>
        <div className="w-[80%]">
          <p className="text-gray-700 dark:text-gray-200">산업경영공학과 졸업</p>
        </div>
      </div>
    </main>
  )
}
