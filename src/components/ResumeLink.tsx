import { profile } from '../data/profile'

interface ResumeLinkProps {
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

/** Opens printable resume; triggers Save as PDF dialog when ?download=1 */
export const resumeDownloadUrl = profile.resumePdf ?? '/resume.html?download=1'

export function ResumeLink({ className = '', children, onClick }: ResumeLinkProps) {
  const isPdf = Boolean(profile.resumePdf)

  return (
    <a
      href={resumeDownloadUrl}
      {...(isPdf
        ? { download: 'Rishi-Jain-Resume.pdf' }
        : { target: '_blank', rel: 'noopener noreferrer' })}
      className={className}
      aria-label="Download Rishi Jain resume"
      onClick={onClick}
    >
      {children ?? (
        <>
          <DownloadIcon />
          Download Resume
        </>
      )}
    </a>
  )
}

function DownloadIcon() {
  return (
    <svg
      className="w-4 h-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  )
}
