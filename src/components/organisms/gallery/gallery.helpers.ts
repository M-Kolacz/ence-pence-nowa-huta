import { type ColumnsPhotoAlbumProps } from 'react-photo-album'

const breakpoints = {
	md: 768,
	lg: 1024,
} as const

export const setGalleryColumns: ColumnsPhotoAlbumProps['columns'] = (
	containerWidth,
) => {
	if (containerWidth < breakpoints.md) return 1
	else if (containerWidth >= breakpoints.md && containerWidth < breakpoints.lg)
		return 2
	else return 3
}
