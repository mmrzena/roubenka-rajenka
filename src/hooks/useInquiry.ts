import { useMutation } from '@tanstack/react-query'

export interface InquiryFormData {
  name: string
  email: string
  phone?: string
  arrival: string
  departure: string
  guests: string
  message: string
  locale: 'cs' | 'en'
  website?: string
  startedAt: string
}

interface InquiryResponse {
  message: string
}

export function useInquiryForm(fallbackError: string) {
  return useMutation({
    mutationFn: async (formData: InquiryFormData): Promise<InquiryResponse> => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        let errorMessage = fallbackError
        const contentType = response.headers.get('content-type') || ''
        if (contentType.includes('application/json')) {
          try {
            const error = await response.json()
            errorMessage = error.error || errorMessage
          } catch {
            // fall through to generic message
          }
        }
        throw new Error(errorMessage)
      }

      return response.json()
    },
  })
}
