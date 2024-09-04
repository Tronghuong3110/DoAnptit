package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.*;
import lombok.Data;

@Data

public class Media {
    private Long id;
    private String path;
    private String description;
    private String type;

}
